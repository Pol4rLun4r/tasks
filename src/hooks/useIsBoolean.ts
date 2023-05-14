const useIsBoolean = (data: boolean | undefined) => {
    if (data === undefined) {
        return false;
    }

    if (data === null) {
        return false;
    }
    return true;
}

export default useIsBoolean;