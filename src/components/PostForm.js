import React, { Component } from 'react';
import uuid from 'react-uuid';

export default class PostForm extends Component {

    state = {
        id: 0,
        title: "",
        content: ""
    }


    handleChange = (event) => {
        this.setState({
            id: uuid(),
            [event.target.name] : event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
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
