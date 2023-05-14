import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../icon/Icon";
import ButtonStyle from "./style/Button";
import Text from "./Text";

const Button = () => {
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(prev => !prev);
    }

    const handleNavigate = () => {
        navigate('newtask')
    }

    return (
        <ButtonStyle
            animate={{
                // boxShadow: isHover ? '0px 0px 10px #ffffff' : '0px 0px 10px #ffffff0',
                borderColor: isHover ? '#ffffff' : 'rgba(118, 120, 123, 0.58)'
            }}
            transition={{ duration: 0.2 }}

            onClick={handleNavigate}
            onMouseLeave={handleHover}
            onMouseEnter={handleHover}
        >
            <Icon isHover={isHover} />
            <Text
                isHover={isHover}
            >
                create task
            </Text>
        </ButtonStyle>
    )
}

export default Button