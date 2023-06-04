import { useEffect, useRef, useState } from "react";

// style
import Container from "./style/Container";
import { ErrorMsg, LoadingMsg } from "../../../globalStyles/Messages";

// hooks
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useMutationObservable from "../../../hooks/useMutationObservable";
import { isEqual, reject } from "lodash";
import useArrayIsFull from "../../../hooks/useArrayIsFull";

// fetch
import { useQuery } from "react-query";

// component
import Task from "./task/Task";
import SaveOrder from "./task/saveOrder";
import NoTasks from "./noTasks/NoTasks";
import { AnimatePresence } from "framer-motion";


type Itasks = {
  id: string;
  name: string;
  index: number;
  description: string;
  subTasks: []
}

const Tasks = () => {
  const api = useAxiosPrivate();
  const refContainer = useRef<HTMLDivElement>(null);
  const [isMatch, setIsMatch] = useState(false);
  const [order, setOrder] = useState<any>([]);

  
  // fetch data
  const { data, isLoading, error } = useQuery<Itasks[]>('tasks', async () => {
    const response = await api.get('task')
    return response.data;
  });

  // verify data
  const isTasks = useArrayIsFull(data);

  useEffect(() => {
    const originalData: HTMLDivElement[] = [...refContainer.current?.children as any];
    const containerRefined = originalData.map((div, index) => {
      return {
        taskId: div.attributes[1]?.value,
        taskIndex: index
      }
    }).filter(task => typeof task.taskId === "string");

    if (localStorage.getItem("originalData")) return;
    return localStorage.setItem("originalData", JSON.stringify(containerRefined));
  }, [])

  const verify = async (a: any[], b: any[]) => {
    if (isEqual(a, b)) {
      return setIsMatch(false);
    }
    return setIsMatch(true);
  }

  const refresh = async () => {
    const ContainerAlpha: HTMLDivElement[] = [...refContainer.current?.children as any];
    const ContainerBeta = ContainerAlpha.map((div, index) => {
      return {
        taskId: ContainerAlpha[index].attributes[0].value === "boxEdit" ? undefined : div.attributes[1]?.value,
        taskName: div.attributes[0]?.value,
      }
    }).filter(task => typeof task.taskId === "string");

    const ContainerOmega = ContainerBeta.map(task => { return { taskId: task.taskId } });
    const ContainerDelta = reject(ContainerOmega, { taskId: "opacity: 0;" });

    const ContainerRefined = ContainerDelta.map((task, index) => { return { taskId: task.taskId, taskIndex: index } });

    const originalData = JSON.parse(localStorage.getItem("originalData")!);

    setOrder(ContainerRefined);

    verify(ContainerRefined, originalData!);
  };

  useMutationObservable(refContainer.current, refresh, { config: { subtree: false, attributes: true, childList: true } });

  return (
    <>
      <Container
        ref={refContainer}
      >
        {isLoading && <LoadingMsg>Loading...</LoadingMsg>}
        {error as any && <ErrorMsg>NetWork Error</ErrorMsg>}

        {!isTasks && !isLoading && <NoTasks />}

        {data && data?.sort((a, b) => { return a.index - b.index })
          .map((task) => {
            return (
              <Task
                key={task.id}
                taskId={task.id}
                taskName={task.name}
                taskDescription={task.description}
                taskSubTasks={task.subTasks}
                // ---------- //
                propsRefContainer={refContainer}
              />
            )
          })}
      </Container>
      <AnimatePresence>
        {isMatch && !isTasks &&
          <SaveOrder handleRefresh={refresh} order={order} />
        }
      </AnimatePresence>
    </>
  )
}

export default Tasks;