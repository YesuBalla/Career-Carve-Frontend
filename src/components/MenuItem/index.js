import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SlMenu } from "react-icons/sl";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SlMenu size={20} color='black' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Mentors</MenuItem>
        <MenuItem onClick={handleClose}>Events</MenuItem>
        <MenuItem onClick={handleClose}>Become a Mentor</MenuItem>
        <MenuItem onClick={handleClose}>About Us</MenuItem>
        <MenuItem onClick={handleClose}>Pricing</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
        <MenuItem onClick={handleClose}>Sign up</MenuItem>
      </Menu>
    </div>
  );
}