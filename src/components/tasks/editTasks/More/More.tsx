// style
import Icon from "./@Icon/Icon";
import DeleteAll from "./deleteAll/DeleteAll";
import Button from "./style/Button";
import Container from "./style/Container";
import { AnimatePresence } from "framer-motion";
import Background from "./style/Background";

//component
import OptionsDelete from "./optionsDelete/optionsDelete";

// hooks
import { useState } from "react";

const More = () => {
    const [moreActive, setMoreActive] = useState(false);
    const [modalActive, setModalActive] = useState(false)

    const handleMore = () => {
        setMoreActive(prev => !prev)
    }

    return (
        <>
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
                            <DeleteAll modalActive={setModalActive}/>
                        </Container>
                    }
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {modalActive &&
                    <Background>
                        <OptionsDelete handle={setModalActive}/>
                    </Background>
                }
            </AnimatePresence>
        </>
    )
}

export default More;