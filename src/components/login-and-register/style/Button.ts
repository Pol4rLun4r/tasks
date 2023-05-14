import styled from "styled-components";

interface ISignIn {
    isValid: boolean
}

const Button = styled.button`
    background-color: transparent;
    color: ${({ isValid }: ISignIn) => isValid ? '#ffffff' : 'rgba(173, 173, 173, 0.50)'};
    border: 2px solid ${({ isValid }: ISignIn) => isValid ? '#ffffff' : 'rgba(173, 173, 173, 0.50)'};
    padding: 10px 30px 10px 30px;
    /* cursor:  ${({ isValid }: ISignIn) => isValid ? 'pointer' : 'not-allowed' }; */

    transition: all 1.3s;
`
export default Button;