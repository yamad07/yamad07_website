import React , { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const About = () => (
  <MuiThemeProvider muiTeme={getMuiTheme(darkBaseTheme)}>
  <Card style={style.container}>
    <CardHeader
      title="About"
      subtitle="自己紹介など"
    />
    <CardTitle title="">
        慶應大学に通うソフトウェアエンジニアです。機械学習や深層学習などのデータサイエンスと、Webアプリやネイティブアプリなどのプロダクト開発を2つのスキルを武器にしています。
    </CardTitle>
  </Card>
  </MuiThemeProvider>
);
export default About

const style = {
    container : {
        marginTop:30,
    }
}
