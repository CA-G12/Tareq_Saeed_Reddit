import "./css/postList.css";
import React from "react";
import Post from "./Post.component";

class PostList extends React.Component {

    render() {
        if (!this.props.posts) return (<h2>Loading ... </h2>)
        
        return (
            <>
                <div className="postslist">
                    {
                        this.props.posts.map((e) =>
                            <div className="post"
                                key={e.id}>
                                <Post onePost={e} />
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}
export default PostList;