import React, { Component } from 'react';
import './Timer.css'
import {getRandom} from './common/ClaimTime'
class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    render() { 
        const {count} = this.state;
        return ( 
            <div className="container-fluid">
                <div className="row">
                  <div className="col-2"></div>
                    <div className="col-9">
                        <h2 className="Claim-Title float-start">Claim Your Free Trial Class</h2>
                    </div>
                    <div className="col"></div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col">
                             <span className="time-left">Time Left : {count} seconds</span>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
         )
    }

    componentDidMount () {
       let startCount = getRandom(30, 60)
        this.setState({
            count: startCount
        })
         this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                 count: (this.state.count <=0 ? window.location.reload(): prevState.count - 1)
            }))
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval)
    }
    // function refreshPage() {
    //     window.location.reload(false);
    //   }
}

 
export default Timer;