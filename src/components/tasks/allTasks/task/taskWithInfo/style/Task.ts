import styled from "styled-components";
import { device } from "../../../../../../globalStyles/Devices.util";

interface Ichecked {
    styleChecked: boolean
}

const CheckboxContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 5px;
    position: relative;
`

const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 93%;
`

const Text = styled.label`
    color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};
    text-decoration: ${({ styleChecked }: Ichecked) => styleChecked ? 'line-through' : 'none'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    margin-left: 5px;
    
    @media ${device.mobileS}{
        max-width: 95%;
        font-size: 20px;
    }
    
    @media ${device.tablet}{
        max-width: 94%;
        font-size: 16px;
    }
`

const SymbolInfo = styled.label`
    color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};
    text-decoration: ${({ styleChecked }: Ichecked) => styleChecked ? 'line-through' : 'none'};
    font-size: 20px;
    text-shadow: 0px 0px 8px ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};

    position: absolute;
    right: 0;

    @media ${device.mobileS}{
        top: -3px;
    }

    @media ${device.tablet}{
        top: -3px;
    }

`

const StyledCheckbox = styled.div`
    border: 2px solid;
    border-color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};
    border-radius: 4px;
    background-color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : 'none'};

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileS}{
        width: 18px;
        height: 18px;
    }

    @media ${device.tablet}{
        width: 16px;
        height: 16px;
    }

    img{
        display: ${({ styleChecked }: Ichecked) => styleChecked ? 'block' : 'none'};
    }
`

export { CheckboxContainer, HiddenCheckBox, StyledCheckbox, Content, Text, SymbolInfo }