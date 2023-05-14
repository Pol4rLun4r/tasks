import { Container, Content, SubContainer, Label, InputStyle } from "./style/Input"
import { ReactNode, useState } from 'react';
import { useFormContext } from "react-hook-form";

type typeRegister = 'description'

interface IInput {
    error: ReactNode,
}

const InputDesc = ({ error }: IInput) => {
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
                        onChange={(e) => handleChange(e.currentTarget.children)}
                    >
                        <Label>
                            task description
                        </Label>
                        <InputStyle
                            autoCorrect="none"
                            spellCheck={false}
                            {...register('description')}
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            autoComplete="off"
                            placeholder="enter an description (optional)"
                            // style
                            focused={focus}
                        />
                    </Content>
                </SubContainer>
                {error}
            </Container>
        </>
    )
}

export default InputDesc;