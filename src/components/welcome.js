import React, { Component } from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { LineChart, Line } from 'recharts';
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
];
const Welcome = () => (
    <div style={{marginTop: 30}}>
      <LineChart width={1300} height={400} data={data} style={{margin: "auto", opacity: 0.5}}>
          <Line type="natural" dataKey="pv" stroke="#8884d8" dot={false}/>
          <Line type="natural" dataKey="uv" stroke="#8884d8" dot={false} />
        </LineChart>
    <h1 style={style.top_text} >Machine Learning and Aesthetic Engineering</h1>
    </div>
) 

export default Welcome;

const style = {
    top_text: {
        margin: 0,
        top: 300, 
        left: 0,
        right: 0,
        fontSize: 30,
        position: "absolute",
        textAlign: "center",
        color: "#616161",
    }
}

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
})
