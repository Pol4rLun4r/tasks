import styled from "styled-components"
import { device } from "../../../../../../globalStyles/Devices.util"

const IconStyle = styled.img`

@media ${device.mobileS} {
        width: 35px;
    }
    
    @media ${device.tablet}{
        width: 30px;
    }
`

export default IconStyle