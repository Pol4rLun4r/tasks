import styled from "styled-components"
import { device } from "../../../../../../../globalStyles/Devices.util"; 
import { leftAndRight, topAndBottom } from "./Sides.window";

const Window = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    /* width: 100%; */

    border-top: 3px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,0.016260162601625994) 100%) 1;

    @media ${device.mobileS}{
        padding-top: ${topAndBottom.mobileS};
        padding-bottom: ${topAndBottom.mobileS};
        padding-left: ${leftAndRight.mobileS};
        padding-right: ${leftAndRight.mobileS};
    }

    @media ${device.mobileM}{
        padding-top: ${topAndBottom.mobileM};
        padding-bottom: ${topAndBottom.mobileM};
        padding-left: ${leftAndRight.mobileM};
        padding-right: ${leftAndRight.mobileM};
    }

    @media ${device.mobileL}{
        padding-top: ${topAndBottom.mobileL};
        padding-bottom: ${topAndBottom.mobileL};
        padding-left: ${leftAndRight.mobileL};
        padding-right: ${leftAndRight.mobileL};
    }

    @media ${device.myMobile}{
        padding-top: ${topAndBottom.myMobile};
        padding-bottom: ${topAndBottom.myMobile};
        padding-left: ${leftAndRight.myMobile};
        padding-right: ${leftAndRight.myMobile};
    }
`

export default Window;