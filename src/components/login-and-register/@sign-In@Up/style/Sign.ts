import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
`

export const Question = styled.span`
    color: rgba(173, 173, 173, 0.50);
    font-size: 12px;
`

export const SignStyle = styled(Link)`
    text-decoration: none;
    font-size: 12px;
    color: #ffffff;

    margin-left: 5px;
`