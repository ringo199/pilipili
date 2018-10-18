import React, { Component } from 'react';
import VideoPlay from './videoplay';

class Videopage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: '960px',
        height: '360px',
      };
    }
    render() {
        const { width, height } = this.state;
        return (
            <VideoPlay
                width={width}
                height={height}
                onChangeWidth={e => this.setState({ width: e })}
                onChangeHeight={e => this.setState({ height: e })}
                {...this.props}
            />
        )
    }
}

export default Videopage;