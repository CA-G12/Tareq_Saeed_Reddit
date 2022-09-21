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
        fetch(`https://reddit-saeed.herokuapp.com/api/v1/posts/user/${this.state.userId}`)
            .then((res) => res.json())
            .then((result) => this.setState({ postslist: result }
            ));
    };
    increseId = () =>
        this.setState((old) => {
            return { userId: old.userId + 1 }
        });
    render() {
        if (!this.state.postslist) return (<h2>Loading ... </h2>)
        /* if (this.state.postslist === []) return (<h2>No post for user {this.state.userId}</h2>) */
        return (
            <>
                <button onClick={this.increseId}>
                    search on user {`${this.state.userId}`}
                </button>
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