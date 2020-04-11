import React, { Component } from 'react';

export default class PostForm extends Component {

    state = {
        title: "",
        content: ""
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(this.state)
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.createPost(this.state);
        this.setState({
            title: "",
            content: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} data-id={this.props.id}>
                <label>Title</label><button>Post</button><br />
                <input id="titleField" type="text" name="title" onChange={this.handleChange} /><br /><br />
                <textarea id="contentField" type="text" name="content" onChange={this.handleChange} />
            </form>
        )
    }
}
