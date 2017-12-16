import React from 'react';
import Chip from 'material-ui/Chip';

/**
 * An example of rendering multiple Chips from an array of values. Deleting a chip removes it from the array.
 * Note that since no `onClick` property is defined, the Chip can be focused, but does not gain depth
 * while clicked or touched.
 */
export default class Chips extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>
          <Chip
            key={0}
            style={styles.chip}
          >
            React
          </Chip>
          <Chip
            key={1}
            style={styles.chip}
          >
            Pytorch
          </Chip>
      </div>
    );
  }
}
const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}
