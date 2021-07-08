import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'




const Header = () => {

  return (

    <div className="headermain">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className="title">
            <div className="title">ドットピカ</div>
          </Typography>
          <Button color="inherit"><div className="button-top"><Link to="/pixel-arts-edit" style={{ textDecoration: "none" }}>色を塗る</Link></div></Button>
          <Button color="inherit"><div className="button-top"><Link to="/pixel-arts-me" style={{ textDecoration: "none" }}>一覧へ</Link></div></Button>
          <Button color="inherit"><div className="button-top"><Link to="/pixel-arts-templates" style={{ textDecoration: "none" }}>テンプレートを選ぶ</Link></div></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
