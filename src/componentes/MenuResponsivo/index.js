import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import imgMenu from '../../assets/images/menu.png';
import startLogin from '../../assets/images/star_border_24px_outlined.svg';
import imgIcon from '../../assets/images/person_24px_outlined.svg';
import imgLogo from '../../assets/images/logo_trigg_footer.svg';

import './style.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-mobile">
      <div className="button">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <img src={imgMenu}/>
        </Button>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="itensMenuResponse">

          <Link to="/">
            <img className="imgLogo" src={imgLogo} />
          </Link>

          <Link to="/about">
            <MenuItem onClick={handleClose}>Conheça a Trigg</MenuItem>
          </Link>
          
          <Link to="/Product">
            <MenuItem onClick={handleClose}>Produtos</MenuItem>
          </Link>

          <Link to="/faq">
            <MenuItem onClick={handleClose}>Dúvidas Frequentes </MenuItem>
          </Link>
          
          <Link to="/login" className="login">
            <MenuItem onClick={handleClose} className="menuItem">Conecte-se <img src={imgIcon}/> </MenuItem>
          </Link>

          <Link to="register" className="register">
            <MenuItem onClick={handleClose} className="menuItem">Pedir Cartão <img src={startLogin}/> </MenuItem>
          </Link>

        </div>
      </Menu>
    </div>
  );
}