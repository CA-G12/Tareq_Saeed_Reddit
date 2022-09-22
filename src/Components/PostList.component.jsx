import "./css/postList.css";
import React from "react";
import Post from "./Post.component";

class PostList extends React.Component {
    state = {
        userId: 0,
        postslist: [],
    };

    componentDidMount() {
        fetch("https://reddit-saeed.herokuapp.com/api/v1/posts/")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ postslist: data })
                console.log('these are all posts \n', data)
            });
    };
    componentDidUpdate() {
        if (this.state.userId > 0)
        fetch(`https://reddit-saeed.herokuapp.com/api/v1/posts/user/${this.state.userId}`)
            .then((res) => res.json())
            .then((result) => this.setState({ postslist: result }
            ));
    };

    render() {
        if (!this.state.postslist) return (<h2>Loading ... </h2>)
        /* if (this.state.postslist === []) return (<h2>No post for user {this.state.userId}</h2>) */
        return (
            <>
                <ul className="postslist">
                    {
                        this.state.postslist.map((e) =>
                            <li className="post"
                                key={`${e.user_id}_${e.id}`}>
                                <Post onePost={e} />
                            </li>
                        )
                    }
                </ul>
            </>
        )
    }
}
export default PostList;