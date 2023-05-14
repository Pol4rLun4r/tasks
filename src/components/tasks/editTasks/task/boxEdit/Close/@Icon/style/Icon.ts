import styled from "styled-components"
import { device } from "../../../../../../../../globalStyles/Devices.util"

const IconStyle = styled.img`

    @media ${device.mobileS} {
        width: 16px;
    }

    @media ${device.mobileM} {
        width: 18px;
    }

    @media ${device.mobileL} {
        width: 20px;
    }
`

export default IconStyle