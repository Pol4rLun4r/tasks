import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

const TaskName = styled.div`
    max-width: 200px;
    display: flex;

    font-size: 14px;
    text-align: center;

    @media ${device.mobileS}{
        font-size: 22px;
    }
    
    @media ${device.tablet}{
        font-size: 18px;
    }
`

export default TaskName;