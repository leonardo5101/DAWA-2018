import React, {Component} from 'react';

import { Redirect } from 'react-router-dom';

import classes from '.NewPost.css';

class NewPost extends Component {
	state = {
		title:'',
		content: '';
		author:'Jhordan',
		submitted: false
	}
	componentDidMount (){
		console.log(this.props);
	}
	postDataHandler = () => {
		const data = {
			title: this.state.title,
			body: this.state.content,
			author: this.state.author
		};
		fetch('https://jsonplaceholder.typicode.com/posts',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(response => this.props.history.replace('/posts'))
	}

	render (){
		left redirect= null;
		if (this.state.submited) {
			redirect = <Redirect to ="/posts"/>;
		}
		return (
			<div className={classes.NewPost}>
				{redirect}
				<h1>Add a Post</h1>
				<label>Title</label>
				<input
					type="text" value={this.state.title}
					onChange={(event) => this.setState( { title:event.target.value})} />
				<label>Content</label>
				<textarea rows="4"

			)
	}
}