// style
import { Container, Content, InputStyle } from "./style/Input"
import { Up, Down, UpDownContainer } from "./style/UpAndDown";
import Remove from "./style/Button";

import { AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { useFormContext } from "react-hook-form";

interface IInput {
    registerName: string
    handleRemove: (index: number) => void
    handleUp: (index: number) => void
    handleDown: (index: number) => void
    IndexLength: number
    taskIndex: number
}

const InputSubTask = ({ registerName, handleRemove, handleUp, handleDown, IndexLength, taskIndex }: IInput) => {
    const [focus, setFocus] = useState(false);
    const [isViewOptions, setIsViewOptions] = useState(false);
    const { register } = useFormContext();

    const handleFocus = () => {
        setFocus(!focus);
    }
    
    // verifica se o index da subtask é igual á zero
    const isIndex = taskIndex !== 0;

    // verifica se o length das subtasks é igual ao index da subtask
    const isLength = IndexLength !== taskIndex;

    return (
        <>
            <Container
                onMouseEnter={() => setIsViewOptions(true)}
                onMouseLeave={() => setIsViewOptions(false)}
            >
                <AnimatePresence>
                    {isViewOptions &&
                        <UpDownContainer>
                            {isIndex && <Up handle={handleUp} />}
                            {isLength && <Down handle={handleDown} />}
                        </UpDownContainer>
                    }
                </AnimatePresence>
                <Content>
                    <InputStyle
                        placeholder="subtask name"
                        {...register(registerName)}
                        type="text"
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        autoComplete="off"
                        // style
                        focused={focus}
                    />
                </Content>
                <AnimatePresence>
                    {isViewOptions && <Remove handle={handleRemove} />}
                </AnimatePresence>
            </Container>
        </>
    )
}

export default InputSubTask;