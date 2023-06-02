import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { device } from "../../../../../../../globalStyles/Devices.util";

interface IinputCheck {
    focused: boolean
}

export const Container = styled.div`
    margin-bottom: 15px;
    width: 100%;

    p{
        font-size: 11px;
        font-family: monospace;
    }
`

export const SubContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Content = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Label = styled.div`
    display: block;
    width: 100%;
    height: 100%;

    max-width: 100%;

    pointer-events: none;

    text-transform: capitalize;
    color: #999999;
    line-height: 1.2;

    padding-left: 5px;

    @media ${device.mobileS}{
        font-size: 22px;
    }

    @media ${device.tablet}{
        font-size: 15px;
    }
`

export const InputStyle = styled(TextareaAutosize)`
    font-size: 15px;
    text-transform: none;
    color: #ffffff;
    line-height: 1.2;

    border-radius: 5px;
    border: 2px solid ${({ focused }: IinputCheck) => focused ? '#ffffff' : 'transparent'};
    background-color: ${({ focused }: IinputCheck) => focused ? 'transparent' : 'rgba(90, 90, 90, 0.25)'};

    margin-top: 10px;
    width: 100%;
    padding: 5px;

    resize: none;

    transition: all 0.5s;

    overflow: hidden;

    &:focus{
        outline: 0;
    }

    @media ${device.mobileS}{
        font-size: 22px;
        height: 40px;
    }

    @media ${device.tablet}{
        font-size: 15px;
        height: 32px;
    }
`