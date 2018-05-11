import React, {Component} from 'react';

export default class Calculadora extends Component{
	state = {
		cont: this.props.valor1
	}
	sumar = () => {
		this.setState({
			cont: this.props.valor1+this.props.valor2
		});
	}
	restar = () => {
		this.setState({
			cont: this.props.valor1-this.props.valor2
		});
	}
	multiplicar = () => {
		this.setState({
			cont: this.props.valor1*this.props.valor2
		});
	}
	dividir = () => {
		this.setState({
			cont: this.props.valor1/this.props.valor2
		});
	}
	porcentaje = () => {
		this.setState({
			cont: this.props.valor1*(this.props.valor2/100)
		});
	}
	render(){

		return(<div>
			<h1>Componente Calculadora</h1>
			<p>Numero 1: {this.props.valor1}</p>
			<p>Numero 2: {this.props.valor2}</p>

			<p>Resultado: {this.state.cont}</p>
			<button onClick={this.sumar}>Sumar</button>
			<button onClick={this.restar}>Restar</button>
			<button onClick={this.multiplicar}>Multiplicar</button>
			<button onClick={this.dividir}>Dividir</button>
			<button onClick={this.porcentaje}>procentaje</button>
			
			</div>)
	}
}