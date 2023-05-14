import styled from "styled-components";

interface Ichecked {
    styleChecked: boolean
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 25px;
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
    font-size: 12px;
    color: #ffffff;
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
        width: 10px;
    }
`

export { Container, HiddenCheckBox, StyledCheckbox, Text }