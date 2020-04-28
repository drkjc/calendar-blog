import React, { Component } from 'react';
import Header from './Header';
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
            <>
                <Header />
                <form onSubmit={this.onSubmit} data-id={this.props.id} id="writerForm">
                    <button id="publishBtn">Publish</button><br />
                    <input className="writerInputForm" id="titleField" type="text" name="title" placeholder="Title" onChange={this.handleChange} /><br /><br />
                    <textarea className="writerInputForm" id="contentField" type="text" name="content" placeholder="Take notes..." onChange={this.handleChange} />
                </form>
            </>
        )
    }
}
