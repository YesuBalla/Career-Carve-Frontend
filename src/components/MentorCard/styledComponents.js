import styled from 'styled-components' 

export const CardContainer = styled.li`
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    border: 1px solid grey;
    height: 200px;
    padding: 10px;
    border-radius: 5px;
` 

export const CardHeading = styled.h3`
    margin: 0px;
    align-self: center; 
` 

export const Availability = styled.p`
    margin: 0px;
    font-size: 12px;
    font-weight: 500;
` 

export const Expertise = styled.p`
    margin: 0px;
    font-size: 12px;
    font-weight: 500;
` 

export const Premium = styled.p`
    margin: 0px;
    background-color: #fad646;
    font-weight: bold;
    font-size: 12px;
    border-radius: 20px;
    padding: 5px 10px;
    width: 39%;
    align-self: center;
`  

export const Button = styled.button`
    padding: 10px;
    border: none;
    outline: none;
    background-color: #f5a536;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
` 

export const TextHigh = styled.span`
    font-weight: bold;
`

export const TextContainer = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`