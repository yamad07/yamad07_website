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
      title="History"
      subtitle="インターン、職歴、学歴など"
    />
    <CardTitle title="Keio Univ. Environment and Information" subtitle="2016 - ">
      脇田研究会に所属。人工知能とアートに関する研究を行なっている。
    </CardTitle>
    <CardTitle title="scouty inc." subtitle="2017 5 - ">
      退職率予測モジュールの開発、データ分析など。
    </CardTitle>
    <CardTitle title="Recruit Holdgins" subtitle="2017 8 - 9 " >
      史上最年少でデータサイエンティストインターンに参加。競合サービスの分析と施策の提案。
    </CardTitle>
    <CardTitle title="WaterFowl inc." subtitle="2017 8 - 9 " >
      リードエンジニア。DevOpsの全てを担当。
    </CardTitle>
  </Card>
  </MuiThemeProvider>
);

const style = {
    container : {
        marginTop:30,
    }
}

export default History;
