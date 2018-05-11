import React, {Component} from 'react';

import classes from './Contador.css';

export default class Contador extends Component{
	state = {
		cont: this.props.valor
	}
	disminuirHandler = () => {
		this.setState({
			cont: this.state.cont - 1
		});
	}
	resetHandler = () => {
		this.setState({
			cont: this.props.valor
		});
	}
	aumentarHandler = () => {
		this.setState({
			cont: this.state.cont + 1
		});
	}
	render(){
		let advertencia = (<p> Iniciamos con un numero mayor a 5!</p>);
			if(this.props.valor<=5) advertencia = null;
		return(<div className ={classes.Contador}>
			<h1>Este es mi componente contador</h1>
			<p>Este contador iniciará en: {this.props.valor}</p>
			{advertencia}
			<p>Numero actual: {this.state.cont}</p>
			<button onClick={this.disminuirHandler}>Disminuir</button>
			<button onClick={this.resetHandler}>Resetear</button>
			<button onClick={this.aumentarHandler}>Aumentar</button>
			</div>)
	}
}