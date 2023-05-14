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
    color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};
    text-decoration: ${({ styleChecked }: Ichecked) => styleChecked ? 'line-through' : 'none'};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 93%;

    @media ${device.mobileS}{
        font-size: 12px;
    }

    @media ${device.mobile600px}{
        font-size: 15px;
    }

    @media ${device.tablet}{
        font-size: 16px;
    }
`

const StyledCheckbox = styled.div`
    width: 13px;
    height: 13px;
    border: 2px solid;
    border-color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : '#FFFFFF'};
    border-radius: 4px;
    background-color: ${({ styleChecked }: Ichecked) => styleChecked ? '#6C6E71' : 'none'};

    margin-right: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        display: ${({ styleChecked }: Ichecked) => styleChecked ? 'block' : 'none'};
    }
`

export { CheckboxContainer, HiddenCheckBox, StyledCheckbox, Text }