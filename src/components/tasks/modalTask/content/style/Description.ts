import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

const Description = styled.div`
    max-width: 270px;
    display: flex;

    font-size: 13px;
    text-align: center;
    color: rgb(126 126 126);

    margin-top: 20px;

    @media ${device.mobileS}{
        font-size: 20px;
    }
    
    @media ${device.tablet}{
        font-size: 16px;
    }
`

export default Description;