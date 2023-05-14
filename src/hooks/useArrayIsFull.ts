const useArrayIsFull = (array: any) => {
    if (array?.length === 0) {
        return false;
    }

    if (array?.length === undefined) {
        return false;
    }
    return true;
}

export default useArrayIsFull;