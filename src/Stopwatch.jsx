import React, { Component } from 'react';
import './App.css'

class Stopwatch extends Component{

	constructor(props){
		super(props);
		this.state={
			seconds: 0,
			started: false
		}
		//console.log(this.props)
	}

	componentWillMount(){
		this.getTimeUntil(this.props.deadline);
	}

	componentDidMount(){
		setInterval( () => this.getTimeUntil(this.props.deadline)			,1000)
	}


	getTimeUntil(deadline){
		if(this.props.initWatch){
			if(!this.state.started){
				this.setState({seconds: this.props.deadline, started: true})
			}
			const seconds = parseInt(this.state.seconds) - 1 ;
			this.setState({ seconds: seconds });
			if(this.state.seconds === 0){
				alert('TIEMPO ACABADO');
				this.setState({seconds: this.props.deadline, started: false})
			}
		}
		else
			this.setState({seconds: this.props.deadline, started: false})
	}

	render(){
		return(

		<div>
			<div className="Clock-seconds"> {this.state.seconds} Seconds remaining</div>
		</div>

		)
	}
}

export default Stopwatch;