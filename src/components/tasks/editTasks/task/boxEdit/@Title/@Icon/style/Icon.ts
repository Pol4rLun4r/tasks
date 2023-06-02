import styled from "styled-components"
import { device } from "../../../../../../../../globalStyles/Devices.util"

const IconStyle = styled.img`
    margin-right: 3px;

    @media ${device.mobileS} {
        width: 26px;
    }

    @media ${device.tablet} {
        width: 20px;
    }
`

export default IconStyle