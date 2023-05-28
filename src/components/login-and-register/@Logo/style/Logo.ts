import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 40px;
`

export const IconStyle = styled.img`
    margin-bottom: 2px;

    @media ${device.mobileS}{
        width: 65px;
    }

    @media ${device.mobileL}{
        width: 75px;
    }

    @media ${device.myMobile}{
        width: 85px;
    }
    
    @media ${device.tablet}{
        width: 60px;
    }
`

export const Text = styled.h1`
    @media ${device.mobileS}{
        font-size: 20px;
    }

    @media ${device.mobileL}{
        font-size: 22px;
    }

    @media ${device.myMobile}{
        font-size: 25px;
    }

    @media ${device.tablet}{
        font-size: 20px;
    }
`