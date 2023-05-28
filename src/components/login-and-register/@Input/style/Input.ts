import styled from "styled-components";
import { device } from "../../../../globalStyles/Devices.util";

interface IinputCheck {
    focused: boolean
    isTrue: boolean
}

export const Container = styled.div`
    p{
        font-size: 11px;
        font-family: monospace;
    }

    @media ${device.mobileS}{
        margin-bottom: 60px;
        width: 100%;
    }
    
    @media ${device.tablet}{
        margin-bottom: 40px;
        width: 270px;
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
    position: relative;
    border-bottom: 2px solid;
    border-color: ${({ focused, isTrue }: IinputCheck) => focused || isTrue ? '#ffffff' : 'rgba(173, 173, 173, 0.50)'};

    display: flex;
    justify-content: center;
    flex-direction: column;

    transition: all 0.4s;

    margin-bottom: 5px;
`

export const FocusInput = styled.div`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    
    pointer-events: none;

    text-transform: capitalize;
    color: #999999;
    line-height: 1.2;
    
    transition: all 0.4s;
    
    padding-left: 5px;
    
    @media ${device.mobileS} {
        bottom: ${({ focused, isTrue }: IinputCheck) => focused || isTrue ? '20px' : '-10px'};
        font-size: 20px;
    }

    @media ${device.tablet}{
        font-size: 15px;
    }
`

export const InputStyle = styled.input`
    text-transform: none;
    color: #ffffff;
    line-height: 1.2;

    display: relative;

    border: none;
    background-color: transparent;
    
    width: 100%;

    padding-left: 5px;

    transition: all 0.4s;

    &:focus{
        outline: 0;
    }

    @media ${device.mobileS} {
        font-size: 20px;
        height: 40px;
    }

    @media ${device.tablet} {
        font-size: 17px;
    }
`