import Header from '../Header';
import landingPageImg from '../../assets/landingPageImg.png'

import {
    ContentContainer,
    TextContainer,
    ImageContainer,
    Image,
    Button,
    Heading,
    Subheading,
    HorizontalLine,
    Description,
    TextHighlight,
    ButtonsContainer,
    StyledLink,
} from './styledComponents'


const LandingPage = () => (
    <>
      <Header />
      <ContentContainer>
        <TextContainer>
            <Heading>From <TextHighlight>resume</TextHighlight> to <TextHighlight>final interview prep</TextHighlight></Heading>
            <HorizontalLine />
            <Subheading>We've got you covered</Subheading>
            <ButtonsContainer>
            <StyledLink to='/scheduler'>
                <Button type='button'>Book 1X1</Button>
            </StyledLink>
            <StyledLink>
                <Button type='button' disabled>Buy Training Plans</Button>
            </StyledLink>
            </ButtonsContainer>
            <Description>
                Get ready for your MBA campus placements, summers, 
                or finals with the guidance of the most experienced and renowned 
                Placement Training Agency with over
            </Description>
        </TextContainer>
        <ImageContainer>
            <Image src={landingPageImg} alt="Landing Page Image" />
        </ImageContainer>
      </ContentContainer>
    </>
)

export default LandingPage