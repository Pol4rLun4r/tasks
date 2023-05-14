import styled from "styled-components";
import { device } from "../../../../../globalStyles/Devices.util";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    width: 100%;

    @media ${device.mobileS}{
        height: 100%;
    }

    @media ${device.tablet}{
        height: auto;
    }
`

export const SubContainer = styled.div`
    margin-top: 5px;
    width: 100%;

    p{
        margin-top: 8px;
        margin-left: 7.5%;
        font-size: 11px;
        font-family: monospace;
    }
`

export const LabelAndButtom = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 10px;
    margin-bottom: 5px;
`

const fontSize = '11px';

export const Label = styled.label`
    font-size: ${fontSize};
    color: rgb(153, 153, 153);
`

export const Add = styled.button`
    font-size: ${fontSize};
    color: #ffffff;
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const Content = styled.div`
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    &:hover { 
        transition: all 0.5s;

        &::-webkit-scrollbar-thumb {
            background-color: #76787B;
        }

    }
`