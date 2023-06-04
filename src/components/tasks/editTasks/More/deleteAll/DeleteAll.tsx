import Button from "./style/Button"

interface IDeleteAll {
    modalActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteAll = ({ modalActive }: IDeleteAll) => {
    return (
        <Button onClick={() => modalActive(true)} >Delete All</Button>
    )
}

export default DeleteAll;