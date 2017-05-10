import React, { Component } from 'react';
import './App.css'
import Clock from './Clock'
import Stopwatch from './Stopwatch'
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: '',
			initWatch: false
		}
	}

	changeDeadline(){
		this.setState( { deadline: this.state.newDeadline } );
	}

	startStopwatch(){
		this.setState( { deadline: this.state.newDeadline } );
		return this.state.initWatch ? this.setState({initWatch: false}) : 
									this.setState({initWatch: true});
		//const initWatch = true; 
		//this.setState( { initWatch} );
	}

	render(){
		return(
			<div className="App">
				<div className="App-title"> Countdown to {this.state.deadline} </div>
				<Clock deadline={this.state.deadline} ></Clock>
				<Stopwatch deadline={this.state.deadline} initWatch={this.state.initWatch} />
				<Form inline>
					<FormControl
					className="Deadline-input"
					placeholder='New date'
					onChange={event => this.setState({newDeadline: event.target.value})}
					/>
				<Button onClick={ ()=> this.changeDeadline() }>Submit</Button>
				<Button onClick={ ()=> this.startStopwatch() }>Stopwatch</Button>
				</Form>
			</div>
		)
	}

}

export default App;