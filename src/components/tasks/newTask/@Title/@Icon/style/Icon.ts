import styled from "styled-components"
import { device } from "../../../../../../globalStyles/Devices.util"

const IconStyle = styled.img`
    margin-right: 3px;

    @media ${device.mobileS} {
        width: 18px;
    }

    @media ${device.mobileL} {
        width: 20px;
    }
`

export default IconStyle