import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media ${device.tablet}{
        justify-content: center;
        height: auto;
    }

`

export default Container;