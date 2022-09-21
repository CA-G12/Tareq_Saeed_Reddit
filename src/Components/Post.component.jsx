import "./css/post.css";
import React from "react";

class Post extends React.Component {

    
    render() {
        const { id, title, content, user_id } = this.props.onePost
        return (
            <>
                <h2>{title}</h2>
                <p>{content}</p>
            </>
        )
    }
}

export default Post;