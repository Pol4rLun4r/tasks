import styled from "styled-components";

interface IinputCheck {
    focused: boolean
}

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
`

export const Content = styled.div`
    width: 85%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transition: all 0.4s;
`

export const InputStyle = styled.input`
    font-size: 14px;
    text-transform: none;
    color: #ffffff;
    line-height: 1.2;
    
    border-radius: 5px;
    border: 2px solid ${({ focused }: IinputCheck) => focused ? '#ffffff' : 'transparent'};
    background-color: ${({ focused }: IinputCheck) => focused ? 'transparent' : 'rgba(90, 90, 90, 0.25)'};
    
    width: 100%;
    height: 32px;

    padding-left: 5px;

    transition: all 0.5s;

    &::placeholder{
        color: rgb(100, 100, 100);
    }

    &:focus{
        outline: 0;
    }
`