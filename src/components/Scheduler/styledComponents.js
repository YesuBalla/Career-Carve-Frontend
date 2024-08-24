import styled from 'styled-components'  
import Popup from 'reactjs-popup'

export const AppContainer = styled.div`
    min-height: 100vh;
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;

`
export const ContentContainer = styled.div`
    padding: 1% 5%;
    display: flex;;
    flex-direction: column;
    
`
export const InputContainer = styled.div`
    width: 40%;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #212529;
    margin-bottom: 6px;
    margin-left: 5px;
` 

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #1C8EA8;
    outline: none;
    border-radius: 5px;
    margin-bottom: 12px;
    font-size: 16px;
    color: #212529;
`

export const Selecter = styled.select`
    padding: 10px;
    border: 1px solid #1C8EA8;
    outline: none;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #212529;
    cursor: pointer;
`

export const Option = styled.option``

export const Button = styled.button`
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #1C8EA8;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    width: 35%;
`

export const Heading = styled.h1`
    align-self: center;
    color: #1C8EA8;
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    font-size: 40px;
    letter-spacing: -0.7029px;
    line-height: 50px;
    word-spacing: 0px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 100px;
`

export const HorizontalLine = styled.hr`
    align-self: center;
    height: 2px;
    width: 101px;
    color: #212529;
    background-color: #000000;
    margin: 0px;
    margin-right: 100px;
`

export const MentorsContainer = styled.ul`
    width: 50%;
    padding: 0px;
    list-style-type: none;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: 60vh;
    background-color: #fff;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`

export const InputHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const InputHeaderText = styled.h2`
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    letter-spacing: -0.7029px;
    line-height: 50px;
    word-spacing: 0px;
    font-weight: 500;
    margin: 0px;
    color: #212529;
`

export const TextUnderline = styled.div``

export const BlueText = styled.span`
    color: #1C8EA8;
`
export const AssignButton = styled.button`
    padding: 10px;
    margin-top: 10px;
    background-color: #1C8EA8;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    outline: none;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const CloseButton = styled.button`
    width: 45%;
    padding: 10px;
    background-color: #f5a536;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
` 

export const SubmitButton = styled.button`
    width: 45%;
    padding: 10px;
    background-color: #1C8EA8;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
`

export const DetailsViewContainer = styled.div`
    display: flex;
    flex-direction: column;
` 

export const StudentName = styled.p`
    font-weight: bold;
    margin: 0px;
    margin-bottom: 10px;
`

export const SelectedAvailability = styled.p`
    font-weight: bold;
    margin: 0px;
    margin-bottom: 10px;
`

export const SelectedInterest = styled.p`
    font-weight: bold;
    margin: 0px;
    margin-bottom: 10px;
`

export const TimeSelectorContainer = styled.div`
`

export const SelectedTimeText = styled.p`
    font-weight: 500;
    margin: 0px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 24px;
    // align-self: center;
` 

export const MentorName = styled.p`
    font-weight: bold; 
    margin: 0px; 
    margin-bottom: 10px;
`

export const PopupContainer = styled.div``

export const StyledPopup = styled(Popup)`
    &-content {
        border-radius: 10px;
        padding: 2%;
        font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    }
`
export const PopupHeading = styled.h1`
    font-family: 'Roboto', 'Helvetica', Arial, sans-serif;
    font-size: 40px;
    letter-spacing: -0.7029px;
    line-height: 50px;
    word-spacing: 0px;
    font-weight: 500;
    margin-bottom: 7px;
`

export const DurationSelecter = styled.select`
    padding: 5px;
    border: 1px solid #1C8EA8;
    outline: none;
    border-radius: 5px;
    font-size: 13px;
    color: #212529;
    cursor: pointer;
` 

export const DurationLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
    color: #212529;
    margin-right: 15px;
`

export const SmallText = styled.span`
    font-size: 12px;
`
export const PopupHorizontalLine = styled.hr`
    height: 2px;
    width: 101px;
    color: #212529;
    background-color: #000000;
    margin: 0px;
    margin-bottom: 20px;
`
export const SchedulesContainer = styled.div`
`

export const ScheduleList = styled.ul`
    list-style-type: none;
    padding: 0px;
    overflow: auto;
    height: 50vh;
`

