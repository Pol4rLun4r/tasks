import styled from "styled-components";
import noiseBackground from "../assets/noise.gif";

const Noise = styled.div`
    &::before{
        position: fixed;
        top: 0;
        left: 0;
        height:100%;
        width:100%;
        content: "";
        opacity: 0.05;
        z-index: 1000;
        pointer-events: none;
        background-size: cover;
        background: url(${noiseBackground});
        background-size:100%;
    }
`

export default Noise