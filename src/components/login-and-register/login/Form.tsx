// style
import Input from "../@Input";
import FormStyle, { OnChangeForm } from "../style/Form";
import Button from "../style/Button";
import { ErrorMsg, LoadingMsg, SuccessMsg } from "../style/Messages";

// form functions
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zodSchema
import Schema from "./Schema";
type loginUserFormData = z.infer<typeof Schema>;

//api
import { api } from "../../../services/api";
import { UseMutateFunction, useMutation } from "react-query";

// Context
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

// persist login
import PersistCheckbox from "./persistCheckbox";

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
    const methods = useForm<loginUserFormData>({ resolver: zodResolver(Schema) })
    const {
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = methods;

    // fetch login User
    const loginUser = async (data: IUser) => {
        const response = await api.post('/login', data, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });
        return response.data
    };

    const navigate = useNavigate()
    const location = useLocation();

    // react query function
    const { mutate, isError, error, isSuccess, isLoading }: IError = useMutation(loginUser, {
        onSuccess: async (data: IUserData) => {
            const accessToken = data.accessToken;
            const role = data.user.role;
            setAuth({ username, password, role, accessToken });
            
            // redirect
            const from = location.state?.from?.pathname || "/";
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 1000);
        }
    });

    // submit function
    const submit = (userData: loginUserFormData) => {
        const user = {
            ...userData
        };
        mutate(user)
    };

    return (
        <>
            <OnChangeForm
                onChange={(e) => handleChange(e.currentTarget.children)}
            >
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
                        <PersistCheckbox />
                        <Button isValid={isValid} type="submit" >sign in</Button>
                        {isError && error.response && <ErrorMsg>{error?.response?.data?.message}</ErrorMsg>}
                        {isError && !error?.response?.data?.message && <ErrorMsg>{error.message}</ErrorMsg>}
                        {isLoading && <LoadingMsg>Sending data...</LoadingMsg>}
                        {isSuccess && <SuccessMsg>Logged in user, redirecting...</SuccessMsg>}
                    </FormStyle>
                </FormProvider>
            </OnChangeForm>
        </>
    )
}

export default Form