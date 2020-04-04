import React, { Component } from 'react';
import '../css/Writer.scss';

export default class Writer extends Component {

    state = {
        title: "",
        content: ""
    }

    render() {
        return (
            <div className="writer">Writer</div>
        )
    }
}