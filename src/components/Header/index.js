import InputSearchBar from '../InputSearchBar'
import MenuItem from '../MenuItem'
import {Navbar, Logo, LogoSearchContainer} from './styledComponents'
import CareerCarveLogo from '../../assets/careerCarveLogo.png'

const Header = () => (
    <Navbar>
        <LogoSearchContainer>
            <Logo src={CareerCarveLogo} alt='logo' />
            <InputSearchBar />
        </LogoSearchContainer>
        <MenuItem label='Home' />
    </Navbar>
)

export default Header