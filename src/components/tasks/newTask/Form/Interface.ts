import { UseMutateFunction } from "react-query"

export interface ITask {
    name: string
    description: string
}

export interface IError {
    error: any
    isSuccess: boolean
    isError: boolean
    mutate: UseMutateFunction<any, unknown, ITask, unknown>
    isLoading: boolean
    data?: any | null
}

export interface ITaskData {
    name: string
    description: string
}