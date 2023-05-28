import styled from "styled-components"
import { device } from "../../../../../../globalStyles/Devices.util" 

const IconStyle = styled.img`
    margin-bottom: 5px;

    @media ${device.mobileS} {
        width: 35px;
    }
    
    @media ${device.tablet}{
        width: 25px;
    }

`

export default IconStyle