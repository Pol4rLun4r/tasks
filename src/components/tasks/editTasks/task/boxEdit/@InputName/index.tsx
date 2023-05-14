import { Container, Content, SubContainer, Label, InputStyle } from "./style/Input"
import { ReactNode, useState } from 'react';
import { useFormContext } from "react-hook-form";

interface IInput {
    error: ReactNode,
}

const InputName = ({ error }: IInput) => {
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
                        <Label>task name</Label>
                        <InputStyle
                            {...register('name')}
                            type="text"
                            onFocus={handleFocus}
                            onBlur={handleFocus}
                            autoComplete="off"
                            placeholder="enter a new task"
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

export default InputName;