//rcc
//class 컴포넌트
import React, { Component } from 'react'

export default class AppClass extends Component {
  
  constructor(props){ //클래스 생성할 때 쓰임, 생성자
    super(props) //React.Component를 가리킴
    this.state = {//현재 상태 설정해야함. 이 안의 상태, 원하는 값 다 넣어줌
      counter : 0
    }
  }

  increase = () => {
    this.setState({
      counter : this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increase}> +1 </button>
      </div>
    )
  }
}

/*
import React, {useState} from 'react'

export default function AppClass() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter( counter + 1)
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}> +1 </button>
    </div>
  )
}
*/

