import {
    CardContainer,
    CardHeading,
    Availability,
    Expertise,
    Premium,
    Button,
    TextHigh,
    TextContainer,
} from './styledComponents'

const MentorCard = (props) => {
    const { mentorDetails } = props;
    const { name, availability, areasOfExpertise, isPremium} = mentorDetails
    const onClickSchedule = () => {
        alert('Upgrading to Premium will incur additional charges. Do you want to proceed with the upgrade?');
    };
    
    return (
        <CardContainer>
            <TextContainer>
                <CardHeading>{name}</CardHeading>
                <Availability><TextHigh>Availability :</TextHigh> {availability}</Availability>
                <Expertise><TextHigh>Expert in : </TextHigh> {areasOfExpertise}</Expertise>
            </TextContainer>
            {isPremium === 1 && <Premium>Premium Mentor</Premium>}
            <Button type='button' onClick={onClickSchedule}>Schedule Session</Button>
        </CardContainer>
    )
}

export default MentorCard;