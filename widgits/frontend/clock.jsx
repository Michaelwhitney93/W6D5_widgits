import React from "react";

class Clock extends React.Component {
    constructor (props) {
        super(props);
        this.state = { time: new Date()};
        this.tick = this.tick.bind(this);
    } 

    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount(){
        setInterval(this.tick, 1000);
    }


    render () {
        return (
            <>
            <div className="clock">
                <p className="time">
                    <span>Time: </span>
                    <span>{this.state.time.getHours() < 10 ? "0" : ""}{this.state.time.getHours()}:
                    {this.state.time.getMinutes() < 10 ? "0" : ""}{this.state.time.getMinutes()}:
                    {this.state.time.getSeconds() < 10 ? "0" : ""}{this.state.time.getSeconds()}</span>
                </p>
                <p className="time">
                    <span>Date: </span>
                    <span>{this.state.time.toDateString()}</span>
                </p>
            </div>
            </>
        )
    }
}




export default Clock;