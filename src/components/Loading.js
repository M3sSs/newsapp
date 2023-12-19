import React, { Component } from 'react'
import loading from '../GIFS/Loading.gif'
export class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="...." height={60}/>
      </div>
    )
  }
}

export default Loading