import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';
import uuid from 'react-uuid';

export default class PostForm extends Component {

    state = {
        redirect: false,
        id: 0,
        title: "",
        content: "",
        month: {}
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{ pathname: `/${this.state.month.year}`}} />
        }
    }

    wordCount = () => {
        return this.state.content.split(' ').length - 1
    }

    setMonth = () => {
        this.setState({
            month: {
                dayId: this.props.month.calendarId,
                monthId: this.props.month.monthId.currentMonth.monthId,
                year: this.props.month.monthId.currentMonth.year
            }

        })
    }


    handleChange = (event) => {
        this.setState({
            id: uuid(),
            [event.target.name] : event.target.value,
        })
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.setMonth();
        this.props.createPost(this.state);
        this.setRedirect();
    }

    render() {
        return (
            <>
                <Header />
                {this.renderRedirect()}
                <form onSubmit={this.onSubmit} data-id={this.props.id} id="writerForm">
                    <button id="publishBtn">Publish</button><br />
                    <label>Word Count: {this.wordCount()}</label><br />
                    <input className="writerInputForm" id="titleField" type="text" name="title" placeholder="Title" onChange={this.handleChange} /><br /><br />
                    <textarea className="writerInputForm" id="contentField" type="text" name="content" placeholder="Take notes..." onChange={this.handleChange} />
                </form>
            </>
        )
    }
}
