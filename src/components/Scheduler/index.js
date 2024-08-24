import {Component} from 'react'
import 'reactjs-popup/dist/index.css'
import * as Loader from 'react-loader-spinner'
import Header from '../Header' 
import MentorCard from '../MentorCard'
import ScheduleItem from '../ScheduleItem'
import {
    AppContainer,
    ContentContainer,
    InputContainer,
    FormContainer,
    Label,
    Input,
    Selecter,
    Option,
    Button,
    Heading,
    HorizontalLine,
    MentorsContainer,
    Content,
    InputHeader,
    InputHeaderText,
    TextUnderline,
    BlueText,
    AssignButton,
    ButtonsContainer,
    SubmitButton,
    CloseButton,
    DetailsViewContainer,
    StudentName,
    SelectedAvailability,
    SelectedInterest,
    TimeSelectorContainer,
    SelectedTimeText,
    MentorName,
    PopupContainer,
    StyledPopup,
    PopupHeading,
    DurationSelecter,
    DurationLabel,
    SmallText,
    PopupHorizontalLine,
    SchedulesContainer,
    ScheduleList,
} from './styledComponents'

import './index.css'

const areasOfInterestList = [
    'FMCG Sales',
    'E-Commerce',
    'Digital Marketing',
    'Sales Strategy',
    'Equity Research',
    'Investment Banking',
    'Project Management',
    'Operations',
    'Human Resources',
    'Recruitment',
    'Business Development',
    'Product Management',
    'Consulting',
    'Strategy',
    'Finance',
    'Risk Management',
    'Supply Chain Management',
    'Marketing',
    'Advertising'
]

const timeOptions = [
    '30 minutes',
    '45 minutes',
    '60 minutes'
];

class Scheduler extends Component {
    state = {mentorsList: [], availabilityList: [], studentName: '', selectedInterest: '', availableMentor: '', selectedTime: '', showSchedules: false, isLoading: false}

    getAvailabilityData = async () => {
        const response = await fetch('https://careercarve-backend-6p1s.onrender.com/mentors-availability');
        const data = await response.json();
        const updatedAvailabilityList = data.map((eachItem) => ({
            id: eachItem.id,
            name: eachItem.name,
            availability: eachItem.availability,
            areasOfExpertise: eachItem.areas_of_expertise,
        }))
        this.setState({availabilityList: updatedAvailabilityList});
    }

    getMentorsData = async () => {
        this.setState({isLoading: true});
        const response = await fetch('https://careercarve-backend-6p1s.onrender.com/mentors');
        const data = await response.json();
        const updatedMentorsList = data.map((eachItem) => ({
            id: eachItem.id,
            name: eachItem.name,
            availability: eachItem.availability,
            areasOfExpertise: eachItem.areas_of_expertise,
            isPremium: eachItem.is_premium
        }))
        this.setState({mentorsList: updatedMentorsList, isLoading: false});
    }

    getBookingsData = async () => {
        const response = await fetch('https://careercarve-backend-6p1s.onrender.com/bookings');
        const data = await response.json();
        const updatedBookingsList = data.map((eachItem) => ({
            id: eachItem.id,
            studentName: eachItem.student_name,
            mentorName: eachItem.mentor_name,
            mentorAvailability: eachItem.mentor_availability,
            areaOfInterest: eachItem.area_of_interest,
            scheduledDuration: eachItem.scheduled_duration,
        }))
        this.setState({bookingsList: updatedBookingsList});
    }

    componentDidMount() {
        this.getMentorsData();
        this.getAvailabilityData();
        this.getBookingsData();
    }

    onEnterName = (e) => {
        this.setState({studentName: e.target.value})
    }

    onChangeInterest = (e) => {
        const {availabilityList} = this.state
        const availableMentorsList = availabilityList.filter((eachItem) => (eachItem.areasOfExpertise.includes(e.target.value)));
        this.setState({selectedInterest: e.target.value, availableMentor: availableMentorsList[0]})
    }

    onChangeAvailableMentors = (e) => {
        this.setState({availableMentor: e.target.value})
    }

    onSubmitForm = async () => {
        const { studentName, selectedInterest, availableMentor, selectedTime } = this.state;
        
        const response = await fetch('https://careercarve-backend-6p1s.onrender.com/schedule-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                studentName: studentName,
                mentorName: availableMentor.name,
                areaOfInterest: selectedInterest,
                mentorAvailability: availableMentor.availability,
                scheduledDuration: selectedTime
            }),
        });
        if (!response.ok) {
            alert('Failed to schedule session');
            return;
        }
        alert('Session scheduled successfully');
        this.setState({studentName: '', selectedInterest: '', availableMentor: '', selectedTime: ''})
        this.getMentorsData();
        this.getAvailabilityData();
    }

    handleSelectChange = (event) => {
        this.setState({selectedTime: event.target.value});
    };

    onToggleViewSchedules = () => {
        this.setState({showSchedules:!this.state.showSchedules})
    }

    renderStudentSchedules = () => {
        const { bookingsList } = this.state;
        return (
            <SchedulesContainer>
                <ScheduleList>
                    {bookingsList.map((booking) => (
                        <ScheduleItem key={booking.id} value={booking} />
                    ))}
                </ScheduleList>
            </SchedulesContainer>
        ); 
    };

    renderLoader = () => (
        <div className="loader-container">
          <Loader.ThreeDots type="ThreeDots" color="#0b69ff" height="50" width="50" />
        </div>
      )

    render() {
        const {mentorsList, studentName, selectedInterest, availableMentor, selectedTime, showSchedules, isLoading} = this.state
        return (
        <AppContainer>
            <Header />
            <ContentContainer>
                <Heading>1x1 Trainings</Heading>
                <HorizontalLine />
                <Content>
                    <InputContainer>
                    <InputHeader>
                        <TextUnderline>
                            {showSchedules ? <InputHeaderText>Here are your <BlueText>sessions.</BlueText></InputHeaderText> : <InputHeaderText>Select your <BlueText>mentor</BlueText></InputHeaderText>}
                            <HorizontalLine />
                        </TextUnderline>
                        <Button type='button' onClick={this.onToggleViewSchedules}>{showSchedules ? 'Close' : 'Scheduled Sessions'}</Button>
                    </InputHeader>
                    {showSchedules ? (this.renderStudentSchedules()) :
                    (<FormContainer>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id='name' placeholder='Enter Your Full Name' onChange={this.onEnterName} value={studentName} />
                        <Label htmlFor="interest">Area of Interest</Label>
                        <Selecter id='interest' value={selectedInterest} onChange={this.onChangeInterest}>
                            <Option value="">Select Area of Interest</Option>
                            {areasOfInterestList.map((eachItem) => (
                                <Option key={eachItem} value={eachItem}>
                                {eachItem}
                                </Option>
                            ))}
                        </Selecter>
                        <Label htmlFor="availability">Available Mentor</Label>
                        <Selecter disabled id='availability' value={availableMentor.id} onChange={this.onChangeAvailableMentors}>
                            {availableMentor ? <Option value={availableMentor.id}>{`${availableMentor.name} | ${availableMentor.availability}`}</Option> : <Option value=''>Select Mentor</Option>}
                            {/* {availabilityList.map((eachItem) => (
                                <Option key={eachItem.id} value={eachItem.id}>
                                {`${eachItem.name} | ${eachItem.availability}`}
                                </Option>
                            ))} */}
                        </Selecter>
                        <PopupContainer>
                            <StyledPopup
                                modal
                                trigger={
                                <AssignButton disabled={studentName === ''} type="button">Assign Mentor</AssignButton>
                                }
                            >
                                {close => (
                            <>
                                <DetailsViewContainer>
                                <PopupHeading>Confirm Your <BlueText>Booking</BlueText></PopupHeading>
                                <PopupHorizontalLine />
                                <StudentName>Student Name: {studentName}</StudentName>
                                <MentorName>Mentor Name: {availableMentor.name}</MentorName>
                                <SelectedInterest>Area of Interest: {selectedInterest}</SelectedInterest>
                                <SelectedAvailability>Mentor Availability: {availableMentor.availability}</SelectedAvailability>
                                <TimeSelectorContainer>
                                    <DurationLabel htmlFor="timeSelect">Select Duration:</DurationLabel>
                                    <DurationSelecter 
                                        id="timeSelect"
                                        value={selectedTime} 
                                        onChange={this.handleSelectChange} 
                                        aria-label="Select Duration"
                                    >
                                        <Option value="">Select Duration</Option>
                                        {timeOptions.map((option) => (
                                            <Option key={option} value={option}>
                                                {option}
                                            </Option>
                                        ))}
                                    </DurationSelecter>
                                </TimeSelectorContainer>
                                <SelectedTimeText>Total Amount: <SmallText>Rs. </SmallText>{selectedTime.split(' ')[0]/15 * 1000} /-</SelectedTimeText>
                                </DetailsViewContainer>
                                <ButtonsContainer>
                                <CloseButton
                                type="button"
                                onClick={() => close()}
                                >
                                Close
                                </CloseButton>
                                <SubmitButton disabled={selectedTime === ''} type='button' onClick={() => {
                                        this.onSubmitForm();
                                        close();
                                    }} >Pay & Submit</SubmitButton>
                                </ButtonsContainer>
                            </>
                            )}
                        </StyledPopup>
                        </PopupContainer>
                    </FormContainer>)}
                    </InputContainer>
                    {isLoading ? this.renderLoader() : (
                    <MentorsContainer>
                        {mentorsList.map((mentor) => (<MentorCard key={mentor.id} mentorDetails={mentor} />))}
                    </MentorsContainer>
                    )}
                </Content>
            </ContentContainer>
        </AppContainer>
        )
    }
}

export default Scheduler