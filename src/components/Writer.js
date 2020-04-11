import React, { Component } from 'react';
import { createPost } from "../redux/actions/writer";
import { connect } from "react-redux";
import '../css/Writer.scss';

class Writer extends Component {

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
        debugger;
        alert(this.state)
        this.props.createPost(this.state);
        this.setState({
            title: "",
            content: ""
        })
    }

    render() {
        return (
            <div className="writer">
                <form onSubmit={this.onSubmit} data-id={this.props.match.params.id}>
                    <label>Title</label><button>Post</button><br />
                    <input id="titleField" type="text" name="title" onChange={this.handleChange} /><br /><br />
                    <textarea id="contentField" type="text" name="content" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      posts: state.posts,
    };
  };
  
export default connect(mapStateToProps, { createPost })(Writer);