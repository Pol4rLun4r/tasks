import { Container, Content, SubContainer, FocusInput, InputStyle } from "./style/Input"
import { ReactNode, useState } from 'react';
import { useFormContext } from "react-hook-form";

type typeRegister = 'username' | 'password' | 'confirmPass'

interface IInput {
    label: string,
    type: string,
    nameRegister: typeRegister,
    error: ReactNode,
}


const Input = ({ label, type, nameRegister, error }: IInput) => {
    const [isTrue, setIsTrue] = useState('')

    const handleChange = (data: HTMLCollection | null | any) => {
        setIsTrue(data[1].value);
    }

    const { register } = useFormContext();

    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    }

    return (
        <>
            <Container>
                <SubContainer>
                    <Content
                        focused={focus}
                        isTrue={!!isTrue}
                        onChange={(e) => handleChange(e.currentTarget.children)}
                    >
                        <FocusInput
                            focused={focus}
                            isTrue={!!isTrue}
                        >
                            {label}
                        </FocusInput>
                        <InputStyle
                            {...register(nameRegister)}
                            type={type}
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            autoComplete="off"
                        />
                    </Content>
                </SubContainer>
                {error}
            </Container>
        </>
    )
}

export default Input