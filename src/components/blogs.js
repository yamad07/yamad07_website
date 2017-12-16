import React , { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const History = () => (
  <MuiThemeProvider muiTeme={getMuiTheme(darkBaseTheme)}>
  <Card style={style.container}>
    <CardHeader
      title="blogs"
      subtitle="Qiitaへのリンク"
    />
    <CardTitle title="React Native入門 1" subtitle="2017 12 ">
      脇田研究会に所属。人工知能とアートに関する研究を行なっている。
    </CardTitle>
  </Card>
  </MuiThemeProvider>
);

const style = {
    container : {
        margin: 100
    }
}

export default History;
