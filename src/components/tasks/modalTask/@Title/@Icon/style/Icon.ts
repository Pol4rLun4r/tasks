import styled from "styled-components"
import { device } from "../../../../../../globalStyles/Devices.util"

const IconStyle = styled.img`
    margin-right: 3px;

    @media ${device.mobileS} {
        width: 30px;
    }
    
    @media ${device.tablet}{
        width: 25px;
    }
`

export default IconStyle