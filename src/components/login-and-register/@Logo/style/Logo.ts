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
        width: 40px;
    }

    @media ${device.mobileM}{

    }

    @media ${device.mobileL}{
        width: 45px;
    }

    @media ${device.myMobile}{

    }

    @media ${device.mobile500px}{
        width: 50px;
    }

    @media ${device.mobile600px}{

    }

    @media ${device.tablet}{
        width: 55px;
    }
`

export const Text = styled.h1`
    font-size: 20px;
`