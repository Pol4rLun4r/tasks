import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

interface Ichecked {
    styleChecked: boolean
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 25px;
    
    margin-bottom: 50px;
`

const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
`
const Text = styled.label`
    color: #ffffff;
    
    @media ${device.mobileS}{
        font-size: 15px;
    }

    @media ${device.myMobile}{
        font-size: 18px;
    }

    @media ${device.tablet}{
        font-size: 13px;
    }
`

const StyledCheckbox = styled.div`
    border: 2px solid;
    border-color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};
    border-radius: 4px;
    background-color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : 'none'};

    margin-right: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileS} {
        width: 15px;
        height: 15px;
    }

    @media ${device.myMobile}{
        width: 15px;
        height: 15px;
    }

    @media ${device.tablet}{
        width: 13px;
        height: 13px;
    }

    img{
        display: ${({ styleChecked }: Ichecked) => styleChecked ? 'block' : 'none'};
        width: 10px;
    }
`

export { Container, HiddenCheckBox, StyledCheckbox, Text }