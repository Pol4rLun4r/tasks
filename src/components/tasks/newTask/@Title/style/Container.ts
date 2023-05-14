import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;

    width: 100%;

    @media ${device.mobileS}{
        margin-top: 20px;
    }
    
    @media ${device.mobile600px}{
        margin-top: 0px;
    }
`
export default Container;