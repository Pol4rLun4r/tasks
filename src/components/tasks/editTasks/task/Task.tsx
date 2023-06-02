import { useState, useRef, useEffect } from "react";

// style
import { Container, Content, Text } from "./style/Task";

// components
import Options from "./options/Options";
import Move from "./move/Move";
import BoxDelete from "./boxDelete";
import { AnimatePresence } from "framer-motion";

// hook
import useTask from "../../../../hooks/tasks/useTask";
import BoxEdit from "./boxEdit";

interface Itask {
    taskName: string,
    taskDescription: string
    taskSubTasks: []
    taskId: string
    //------------//
    propsRefContainer: React.RefObject<HTMLDivElement>
}

const Task = ({ taskName, taskId, taskDescription, taskSubTasks, propsRefContainer }: Itask) => {
    const refIndex = useRef<HTMLDivElement>(null)
    const { deleteById, editById } = useTask();
    const [viewOptionsAndMove, setViewOptionsAndMove] = useState(false);
    const [Index, setIndex] = useState<number>();

    const Equals = (id: string) => {
        if (id === taskId) return true;
        return false;
    }

    const isDeleteId = Equals(deleteById);
    const isEditId = Equals(editById);

    useEffect(() => {
        setIndex([...propsRefContainer.current?.children as any].indexOf(refIndex.current));
    }, [])

    const refresh = () => {
        setIndex([...propsRefContainer.current?.children as any].indexOf(refIndex.current));
    }

    return (
        <>
            <Container
                data-name={taskName}
                data-id={taskId}
                ref={refIndex}
            >
                <Content
                    onMouseEnter={() => {
                        setViewOptionsAndMove(true);
                        refresh();
                    }}
                    onMouseLeave={() => setViewOptionsAndMove(false)}
                >
                    <AnimatePresence>
                        {viewOptionsAndMove &&
                            <Move
                                handleRefresh={refresh}
                                refContainer={propsRefContainer}
                                taskIndex={Index}
                            />
                        }
                    </AnimatePresence>
                    <Text viewOptions={viewOptionsAndMove}>{taskName}</Text>
                    <AnimatePresence>
                        {viewOptionsAndMove && <Options taskId={taskId} />}
                    </AnimatePresence>
                </Content>
                {isDeleteId && <BoxDelete taskId={taskId} />}
            </Container >
            <AnimatePresence >
                {isEditId &&
                    <BoxEdit
                        taskId={taskId}
                        taskName={taskName}
                        taskDescription={taskDescription}
                        taskSubTasks={taskSubTasks}
                    />}
            </AnimatePresence>
        </>
    )
}

export default Task;