import React, { Component } from 'react';
import '../css/Writer.scss';


export default class Writer extends Component {

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

    render() {
        return (
            <div className="writer">
                <form>
                    <label>Title</label><br />
                    <input type="text" name="title" onChange={this.handleChange} /><br/>
                    <textarea type="text" name="content" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}