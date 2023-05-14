// style
import Window from "./style/Window";
import Container from "./style/Container";

// components
import Draggable from "react-draggable";
import Content from "./content/Content";
import Close from "./Close/Close";
import Media from "react-media";

// hooks
import useCheckTask from "../../../hooks/tasks/useCheckTask";
import Modal from "./style/Modal";
import Title from "./@Title/Title";
import { AnimatePresence } from "framer-motion";
import { device, deviceMax } from "../../../globalStyles/Devices.util";

const ModalTask = () => {
    const { id } = useCheckTask();

    return (
        <Media queries={{
            mobileS: `${device.mobileS} and ${deviceMax.mobile500px}`,
            mobile600px: `${device.mobile600px}`
        }}>
            {matches => (
                <>
                    {matches.mobileS &&
                        <AnimatePresence>
                            {id &&
                                <Modal>
                                    <Window>
                                        <Container>
                                            <Close />
                                            <Title title="task info" />
                                            <Content />
                                        </Container>
                                    </Window>
                                </Modal>
                            }
                        </AnimatePresence>
                    }
                    {matches.mobile600px &&
                        <AnimatePresence>
                            {id &&
                                <Draggable
                                    bounds="body"
                                >
                                    <Modal>
                                        <Window>
                                            <Container>
                                                <Close />
                                                <Title title="task info" />
                                                <Content />
                                            </Container>
                                        </Window>
                                    </Modal>
                                </Draggable>
                            }
                        </AnimatePresence>
                    }
                </>
            )}
        </Media>
    )
}

export default ModalTask