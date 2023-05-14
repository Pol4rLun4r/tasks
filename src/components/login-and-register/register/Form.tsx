// style
import Input from "../@Input";
import FormStyle from "../style/Form";
import Button from "../style/Button";
import { ErrorMsg, LoadingMsg, SuccessMsg } from "../style/Messages";

// form validations
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zodSchema
import Schema from "./Schema";
type registerUserFormData = z.infer<typeof Schema>;

//api
import { api } from "../../../services/api";
import { UseMutateFunction, useMutation } from "react-query";

// Context
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

interface IUser {
    username: string
    password: string
}

interface IError {
    error: any
    isSuccess: boolean
    isError: boolean
    mutate: UseMutateFunction<any, unknown, IUser, unknown>
    isLoading: boolean
    data?: any | null
}

interface IUserData {
    user: {
        id: string
        role: string
    }
    accessToken: string
}

const Form = () => {

    const { setAuth } = useAuth();

    // get username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (data: HTMLCollection | null | any) => {
        setUsername(data[0][0].value);
        setPassword(data[0][1].value);
    }

    // hook form
    const methods = useForm<registerUserFormData>({ resolver: zodResolver(Schema) })
    const {
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = methods;

    // // fetch create User
    const createUser = async (data: IUser) => {
        const response = await api.post('/user', data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return response.data
    }

    const navigate = useNavigate()
    const location = useLocation();

    // react query function
    const { mutate, isError, error, isSuccess, isLoading }: IError = useMutation(createUser, {
        onSuccess: (data: IUserData) => {
            const accessToken = data.accessToken;
            const role = data.user.role;
            setAuth({ username, password, role, accessToken });

            // redirect
            const from = "/";
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 1000);
        },
    })

    // submit function
    const submit = (userData: registerUserFormData) => {
        const user = {
            ...userData
        };
        mutate(user)
    };

    return (
        <>
            <FormProvider {...methods}>
                <FormStyle
                    onSubmit={handleSubmit(submit)}
                >
                    <Input
                        label="username"
                        type="text"
                        nameRegister="username"
                        error={errors.username && <p>{errors.username.message}</p>}
                    />
                    <Input
                        label="password"
                        type="password"
                        nameRegister="password"
                        error={errors.password && <p>{errors.password.message}</p>}
                    />
                    <Input
                        label="confirm password"
                        type="password"
                        nameRegister="confirmPass"
                        error={errors.confirmPass && <p>{errors.confirmPass.message}</p>}
                    />
                    <Button isValid={isValid} type="submit" >sign up</Button>
                    {isError && error.response && <ErrorMsg>{error?.response?.data?.message}</ErrorMsg>}
                    {isError && !error?.response?.data?.message && <ErrorMsg>{error.message}</ErrorMsg>}
                    {isLoading && <LoadingMsg>Sending data...</LoadingMsg>}
                    {isSuccess && <SuccessMsg>user created, redirecting...</SuccessMsg>}
                </FormStyle>
            </FormProvider>
        </>
    )
}

export default Form