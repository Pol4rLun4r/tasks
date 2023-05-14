import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileS}{
        width: 100%;
        height: 100%;
    }

    @media ${device.tablet}{
        width: 270px;
        height: auto;
        justify-content: center;
    }
`

export default FormStyle;