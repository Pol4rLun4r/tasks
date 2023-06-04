import styled from "styled-components"
import { device } from "../../../../../../globalStyles/Devices.util"

const IconStyle = styled.img`

    @media ${device.mobileS} {
        width: 25px;
    }

    @media ${device.mobileL} {
        width: 30px;
    }

    @media ${device.tablet}{
        width: 20px;
    }
`

export default IconStyle