import { useEffect, useState } from "react"
import { Container, HiddenCheckBox, StyledCheckbox, Text } from "./style/Checkbox"
import tickIcon from "../../../../assets/tick.svg";
import useAuth from "../../../../hooks/useAuth";

const PersistCheckbox = () => {
    const { persist, setPersist } = useAuth();
    const [checked, setChecked] = useState<boolean>(false)

    function togglePersist() {
        setChecked(!checked);
        setPersist((prev: boolean) => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist))
    }, [persist])


    return (
        <Container
            onClick={togglePersist}
        >
            <HiddenCheckBox
                onChange={togglePersist}
                checked={checked}
            />
            <StyledCheckbox
                styleChecked={checked}
            >
                <img
                    src={tickIcon}
                    alt="tickIcon"
                />
            </StyledCheckbox>
            <Text>
                trust this device?
            </Text>
        </Container>
    )
}

export default PersistCheckbox