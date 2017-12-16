import React from 'react';
import Chip from 'material-ui/Chip';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class Chips extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
            <Card style={styles.container}>
                <CardHeader
                  title="Skills"
                  subtitle="保有している技術、スキル"
                />
            <div style={styles.wrapper}>
            <Chip key={0} style={styles.chip}>
                React
            </Chip>
            <Chip key={1} style={styles.chip}>
                Pytorch
            </Chip>
            <Chip key={1} style={styles.chip}>
                Keras
            </Chip>
            <Chip key={1} style={styles.chip}>
                TensorFlow
            </Chip>
            <Chip key={1} style={styles.chip}>
                Rails
            </Chip>
            <Chip key={1} style={styles.chip}>
                Django
            </Chip>
            <Chip key={1} style={styles.chip}>
                React Native
            </Chip>
            <Chip key={1} style={styles.chip}>
                Linux
            </Chip>
            <Chip key={1} style={styles.chip}>
                AWS
            </Chip>
            <Chip key={1} style={styles.chip}>
                Haskell
            </Chip>
            <Chip key={1} style={styles.chip}>
                Vim
            </Chip>
            <Chip key={1} style={styles.chip}>
                IPython Notebook
            </Chip>
            <Chip key={1} style={styles.chip}>
                Arduino
            </Chip>
            <Chip key={1} style={styles.chip}>
                Processing
            </Chip>
            <Chip key={1} style={styles.chip}>
                CUDA
            </Chip>
            </div>
            </Card>
        </MuiThemeProvider>
    );
  }
}
const styles = {
  container: {
    marginTop: 30,
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}
