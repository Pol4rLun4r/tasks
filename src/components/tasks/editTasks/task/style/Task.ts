import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

export const Container = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    margin-bottom: 5px;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
    padding-right: 5px;
    padding-left: 5px;
    
`

interface IView {
    viewOptions: boolean
}

export const Text = styled.label`
    color:  #FFFFFF;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media ${device.mobileS}{
        font-size: 12px;
    }

    @media ${device.mobile600px}{
        font-size: 15px;
    }

    @media ${device.tablet}{
        font-size: 16px;
    }

    /* max-width: ${({ viewOptions }: IView) => viewOptions ? '85%' : '100%'}; */
`