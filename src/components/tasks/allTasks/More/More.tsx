// style
import Icon from "./@Icon/Icon";
import Edit from "./edit/Edit";
import Button from "./style/Button";
import Container from "./style/Container";
import { AnimatePresence } from "framer-motion";

// hooks
import { useState } from "react";

const More = () => {
    const [moreActive, setMoreActive] = useState(false);

    const handleMore = () => {
        setMoreActive(prev => !prev)
    }

    return (
        <div
            onMouseEnter={handleMore}
            onMouseLeave={handleMore}
        >
            <Button>
                <Icon />
            </Button>
            <AnimatePresence>
                {moreActive &&
                    <Container>
                        <Edit />
                    </Container>
                }
            </AnimatePresence>
        </div>
    )
}

export default More;