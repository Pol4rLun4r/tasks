import { UpDownContainer, Down, Up } from "./style/UpAndDown"

interface IMove {
    taskIndex: number | undefined
    // --------------- //
    refContainer: React.RefObject<HTMLDivElement>
    handleRefresh: any
}

const Move = ({ refContainer, taskIndex, handleRefresh }: IMove) => {
    const arrayLength = refContainer.current?.children.length! - 1;

    // verifica se o index da subtask é igual á zero
    const isIndex = taskIndex !== 0;

    // verifica se o length das subtasks é igual ao index da subtask
    const isLength = arrayLength !== taskIndex;

    const handleUp = () => {
        const from = refContainer.current?.children[taskIndex!] as Node;
        const to = refContainer.current?.children[--taskIndex!] as Node;
        refContainer.current?.insertBefore(from, to);
        handleRefresh();
    }

    const handleDown = () => {
        const from = refContainer.current?.children[taskIndex!];
        const to = refContainer.current?.children[++taskIndex!];
        to?.insertAdjacentElement('afterend', from!)
        handleRefresh();
    }

    return (
        <UpDownContainer>
            {isIndex && <Up handle={handleUp} />}
            {isLength && <Down handle={handleDown} />}
        </UpDownContainer>
    )
}

export default Move;