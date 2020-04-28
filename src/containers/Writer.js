import React, { Component } from 'react';
import { createPost } from "../redux/actions/writer";
import { connect } from "react-redux";
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import '../css/Writer.scss';

class Writer extends Component {

    componentDidUpdate(prevProps) {
        //debugger;
    }
    render() {
        console.log(this.props, 'writ comp')
        return (
            <div className="writer">
                <PostList posts={this.props.posts} />
                <PostForm createPost={this.props.createPost} id={this.props.match.params.id}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      posts: state.writer.posts
    };
  };
  
export default connect(mapStateToProps, { createPost })(Writer);