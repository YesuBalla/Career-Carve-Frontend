import {
    ScheduleItemContainer,
    SName,
    MName,
    MAvailability,
    AOInterest,
    SDuration
} from './styledComponents' 

const ScheduleItem = (props) => {
    const {value} = props;
    const {studentName, mentorName, mentorAvailability, areaOfInterest, scheduledDuration} = value
    return (
        <ScheduleItemContainer>
            <SName>Student Name: {studentName}</SName>
            <AOInterest>Area of Interest: {areaOfInterest}</AOInterest>
            <MName>Mentor Name: {mentorName}</MName>
            <MAvailability>Mentor Availability: {mentorAvailability}</MAvailability>
            <SDuration>Scheduled Duration: {scheduledDuration} hours</SDuration>
        </ScheduleItemContainer>
    )
}

export default ScheduleItem;