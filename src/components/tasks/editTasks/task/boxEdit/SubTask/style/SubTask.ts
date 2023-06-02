import styled from "styled-components";
import { device } from "../../../../../../../globalStyles/Devices.util";

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
        font-size: 13px;
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

const fontSizeDefault = '12px';
const fontSizeMobileS = '15.5px';
const fontSizeMobileM = '18px';

export const Label = styled.label`
    color: rgb(153, 153, 153);
    
    @media ${device.mobileS}{
        font-size: ${fontSizeMobileS};
    }
    
    @media ${device.mobileM}{
        font-size: ${fontSizeMobileM};
    }
    
    @media ${device.tablet}{
        font-size: ${fontSizeDefault};
    }
`

export const Add = styled.button`
    color: #ffffff;
    background-color: transparent;
    border: none;
    cursor: pointer;

    @media ${device.mobileS}{
        font-size: ${fontSizeMobileS};
    }

    @media ${device.mobileM}{
        font-size: ${fontSizeMobileM};
    }

    @media ${device.tablet}{
        font-size: ${fontSizeDefault};
    }
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