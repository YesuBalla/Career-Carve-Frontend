import { Component} from 'react'
import { IoSearchSharp } from "react-icons/io5";

import {InputContainer, Input, Label} from './styledComponents'


const placeholders = [
    'Mock Interview',
    'SIP Success',
    'Resume Discussion',
    'PI Questions from Resume',
    'Case Interview',
    'Expert Connect'
];

class InputSearchBar extends Component { 
    state = {
        currentPlaceholder: placeholders[0], effect: false
    } 

    componentDidMount() {
      this.placeholderIntervalId = setInterval(() => this.handlePlaceholderChange(), 3000);
      this.transitionIntervalId = setInterval(() => this.handleTransitionToggle(), 1500);
    }

    componentWillUnmount() {
      clearInterval(this.placeholderIntervalId);
      clearInterval(this.transitionIntervalId);
    }
    
    handlePlaceholderChange() {
      this.setState(prevState => {
          const currentIndex = placeholders.indexOf(prevState.currentPlaceholder);
          const nextIndex = (currentIndex + 1) % placeholders.length;
          return {
              currentPlaceholder: placeholders[nextIndex]
          };
      });
  }

  handleTransitionToggle() {
    this.setState(prevState => ({
      effect: !prevState.effect
    }));
}



  
    render() {
        const { currentPlaceholder, effect } = this.state;
        return (
            <InputContainer>
              <Input type='search' disabled placeholder=' ' />
              <Label effect={effect}>{currentPlaceholder}</Label>
              <IoSearchSharp size={24} color='#8f8f8f' />
            </InputContainer>
        )
    }
}

export default InputSearchBar