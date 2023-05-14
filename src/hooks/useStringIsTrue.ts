const useStringIsTrue = (data: string | undefined | null) => {
    if (data === undefined) return false
    if (data === null) return false
    if (data === "") return false
    if (data === '') return false
    return true
}

export default useStringIsTrue;