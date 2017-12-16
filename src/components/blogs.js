import React , { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const Blogs = () => (
  <MuiThemeProvider muiTeme={getMuiTheme(darkBaseTheme)}>
      <Card style={styles.container}>
        <CardHeader
          title="Blogs"
          subtitle="Qiitaへのリンク"
        />
        <CardTitle title="React Native 入門 1" subtitle="2017 12 ">
            <a href="https://qiita.com/yamad07/items/98675b801f9c02bcccf3">React Nativeを速習したい人にオススメの記事。</a>
        </CardTitle>
      </Card>
  </MuiThemeProvider>
);
const styles={
    container: {
        marginTop: 30,
    }
}

export default Blogs;
