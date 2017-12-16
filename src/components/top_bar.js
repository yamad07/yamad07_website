import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Toolbar from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import { commonStyle } from '../styles/common';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const TopBar = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="Yusuke Yamada Web Site" titleStyle={{fontSize:20, paddingLeft:20, paddingRight:20}} style={commonStyle.appBarColorDefault}>
    </AppBar>
  </MuiThemeProvider>
);

const style={
    
}

const muiTheme = getMuiTheme({
  appBar: {
    height: 70,
  },
});


export default TopBar;
