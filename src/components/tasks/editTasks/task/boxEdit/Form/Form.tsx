// style 
import { ErrorMsg, LoadingMsg } from "./style/Messages";
import FormStyle from "./style/Form";
import Button from "./style/Button";
import { Container, SubContainer, LabelAndButtom, Label, Add, Content } from "../SubTask/style/SubTask"

// component
import InputName from "../@InputName";
import InputDesc from "../@InputDesc";
import InputSubTask from "../SubTask/@inputSubTask";

// form functions
import { useForm, useFieldArray, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// api fetch
import { useMutation } from "react-query";
import useAxiosPrivate from "../../../../../../hooks/useAxiosPrivate";

//zodSchema
import Schema from "./Schema";
type newTaskFormData = z.infer<typeof Schema>;

// Interfaces
import { IError, ITask } from "./Interface";

// hook
import useTask from "../../../../../../hooks/tasks/useTask";

// service
import queryClient from "../../../../../../services/queryClient";

interface IForm {
    TaskName: string,
    Description: string
    SubTasks: []
    Id: string
}

const Form = ({ Id, TaskName, Description, SubTasks }: IForm) => {
    const { setEditById, setTask, task } = useTask();

    // hook form
    const methods = useForm<newTaskFormData>({
        resolver: zodResolver(Schema),
        defaultValues: {
            name: TaskName,
            description: Description || undefined,
            subTasks: SubTasks
        }
    });
    const {
        handleSubmit,
        control,
        formState: {
            errors,
            isValid
        }
    } = methods;

    // subTask config hook form
    const { fields, append, remove, swap } = useFieldArray({
        name: 'subTasks',
        control
    });

    // add subtask function
    const addSubtask = () => {
        append({ name: '' })
    }

    // remove subtask function
    const removeSubtask = (index: number) => {
        remove(index)
    }

    // up position subtask function
    const upSubtask = (index: number) => {
        swap(index, --index);
    }

    // down position subtask function
    const downSubtask = (index: number) => {
        swap(index, ++index);
    }

    // react query function
    const api = useAxiosPrivate();
    const { mutate, isError, error, isLoading }: IError = useMutation(async (data: ITask) => {
        const response = await api.put('/task', data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        })
        return response.data
    }, {
        onSuccess: async (data) => {
            if (task.taskId === data.id) {
                const taskId = data.id;
                const taskName = data.name;
                const taskDescription = data.description;
                const taskSubTasks = data.subTasks;
                setTask({ taskId, taskName, taskDescription, taskSubTasks })
            }
            await queryClient.refetchQueries({ queryKey: ['tasks'], active: true })
            setEditById('');
        }
    })

    // submit form
    const submit = (taskData: newTaskFormData) => {
        const task = {
            Id,
            ...taskData
        };
        mutate(task);
    }

    return (
        <FormProvider {...methods}>
            <FormStyle onSubmit={handleSubmit(submit)}>
                <InputName error={errors.name && <p>{errors.name.message}</p>} />
                <InputDesc error={errors.description && <p>{errors.description.message}</p>} />

                <Container>
                    <LabelAndButtom>
                        <Label>subtask (optional)</Label>
                        <Add type="button" onClick={addSubtask}>add subtask</Add>
                    </LabelAndButtom>

                    <Content>
                        {fields.map((field, index) => {
                            const Length = fields.length - 1;
                            return (
                                <SubContainer key={field.id}>
                                    <InputSubTask
                                        handleRemove={() => removeSubtask(index)}
                                        handleUp={() => upSubtask(index)}
                                        handleDown={() => downSubtask(index)}
                                        taskIndex={index}
                                        IndexLength={Length}
                                        registerName={`subTasks.${index}.name`}
                                    />
                                    {errors?.subTasks?.[index]?.name && <p>{errors?.subTasks?.[index]?.name?.message} </p>}
                                </SubContainer>
                            )
                        })}
                    </Content>
                </Container>

                <Button isValid={isValid} type="submit">save</Button>
                {isError && error.response && <ErrorMsg>{error?.response?.data?.message}</ErrorMsg>}
                {isError && !error?.response?.data?.message && <ErrorMsg>{error.message}</ErrorMsg>}
                {isLoading && <LoadingMsg>saving task...</LoadingMsg>}
            </FormStyle>
        </FormProvider>
    )
}

export default Form;