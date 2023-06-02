import styled from "styled-components"
import { device } from "../../../../../globalStyles/Devices.util";

const Text = styled.p`
    color: white;
    text-shadow: 0px 0px 3px #FFFFFF;
    
    @media ${device.mobileS} {
        font-size: 20px;
    }

    @media ${device.tablet} {
        font-size: 16px;
    }
`

export default Text;