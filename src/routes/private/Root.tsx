import { useState } from "react";

// react Router
import { useLocation, useOutlet } from "react-router-dom";

// components
import Layout from "../../components/layouts/layoutRoot/Layout";
import SignOut from "../../components/signOut/SignOut";
import ModalTask from "../../components/tasks/modalTask";

// animation
import { AnimatePresence } from "framer-motion";
import MotionDiv from "../../components/layouts/layoutRoot/style/MotionDiv";

const AnimateOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>
};

const Root = () => {
    const location = useLocation();

    return (
        <Layout>
            <ModalTask />
            <AnimatePresence mode="wait">
                <MotionDiv key={location.pathname}>
                    <AnimateOutlet />
                </MotionDiv>
            </AnimatePresence>
            <SignOut />
        </Layout>
    )
}

export default Root;