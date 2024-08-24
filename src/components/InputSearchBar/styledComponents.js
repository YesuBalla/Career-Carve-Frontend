import styled from "styled-components";


export const InputContainer = styled.div`
    position: relative;
    background-color: #edeff0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 20px;
    width: 350px;
    padding-right: 10px;
`
export const Input = styled.input`
    padding: 10px;
    font-size: 15px;
    border: none;
    outline: none;
    background-color: transparent;
    width: 100%;
`

export const Label = styled.label`
    position: absolute;
    top: 10px;
    left: 15px;
    color: rgb(139, 139, 139);
    font-size: 14px;
    font-weight: 500;
    pointer-events: none;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    opacity: ${props => (props.effect ? 0 : 1)};
    transform: ${props => (props.effect ? 'translateY(-50%)' : 'translateY(0px)')};
`