import "./css/post.css";
import React from "react";

class Post extends React.Component {

    
    render() {
        const { id, title, content } = this.props.onePost
        return (
            <div key={id}>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        )
    }
}

export default Post;