import { Container, Content, SubContainer, Label, InputStyle } from "./style/Input"
import { ReactNode, useState } from 'react';
import { useFormContext } from "react-hook-form";

type typeRegister = 'description'

interface IInput {
    error: ReactNode,
}

const InputDesc = ({ error }: IInput) => {
    const { register } = useFormContext();

    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    }

    return (
        <>
            <Container>
                <SubContainer>
                    <Content>
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