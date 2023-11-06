import React from 'react';

class Random extends React.Component {
  render() {
    const min = Math.ceil(this.props.min);
    const max = Math.floor(this.props.max);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
      <div>
        {randomNum}
      </div>
    );
  }
}

export default Random;
