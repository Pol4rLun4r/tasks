import styled from "styled-components";

const upperSpace = '40px';
const fontSize = '12px';

export const ErrorMsg = styled.p`
    margin-top: ${upperSpace};
    font-size: ${fontSize};
    color: #C83333;
    text-shadow: 0px 0px 3px #C83333;
`

export const LoadingMsg = styled.p`
    margin-top: ${upperSpace};
    font-size: ${fontSize};
    text-shadow: 0px 0px 3px #FFFFFF;
`

export const SuccessMsg = styled.p`
    margin-top: ${upperSpace};
    font-size: ${fontSize};
    text-shadow: 0px 0px 3px #FFFFFF;
`