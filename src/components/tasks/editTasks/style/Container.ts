import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-bottom: 40px; */

    @media ${device.mobileS}{
        width: 90%;
    }

    @media ${device.tablet}{
        width: 270px;
    }
`

export default Container;