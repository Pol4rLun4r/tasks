import styled from "styled-components"
import { device } from "../../../../../../globalStyles/Devices.util" 

const IconStyle = styled.img`
    margin-bottom: 5px;

    @media ${device.mobileS} {
        width: 25px;
    }

    @media ${device.mobileM} {
        /* width: 18px; */
    }

    @media ${device.mobileL} {
        /* width: 20px; */
    }

    @media ${device.myMobile} {
        /* width: 24px; */
    }

`

export default IconStyle