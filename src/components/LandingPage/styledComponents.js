import styled from 'styled-components' 
import {Link} from 'react-router-dom'


export const StyledLink = styled(Link)`
    width: 40%;
    margin-right: 15px;
`
export const ContentContainer = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content: space-around;
    padding: 0% 5%;
` 

export const TextContainer = styled.div`
    width: 43%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
` 

export const Heading = styled.h1`
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    font-size: 45px;
    letter-spacing: -0.7029px;
    line-height: 50px;
    word-spacing: 0px;
    color: #212529;
    font-weight: 500;
` 

export const HorizontalLine = styled.hr`
    height: 2px;
    width: 101px;
    color: #212529;
    background-color: #000000;
    margin: 0px;
`

export const Subheading = styled.h2`
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    font-size: 32px;
    letter-spacing: -0.26656px;
    line-height: 38.4px;
    word-spacing: 0px;
    color: #212529;
    font-weight: 500;
` 

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    background-color: #f5a536;
    border-radius: 8px;
    padding: 8px 16px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: ${props => props.disabled ? '#fa536' : '#f7b04d'};
    }
`  

export const Description = styled.p`
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    font-size: 16px;
    letter-spacing: 0.15008px;
    line-height: 24px;
    word-spacing: 0px;
    color: #545454;
    font-weight: 500;
` 

export const ImageContainer = styled.div`
    width: 43%;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Image = styled.img`
    width: 95%;
` 
export const TextHighlight = styled.span`
    color: #1C8EA8;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`