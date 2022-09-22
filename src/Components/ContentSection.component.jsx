import { Component } from "react";
import "./css/contentSection.css";
import PostList from "./PostList.component";
import UserList from "./UserList.component";
class ContentSection extends Component {
  state = {
    usersList: [],
    selectedUser: 0,
    postslist: [],
  };
  changeSelectedUser = (data) => {
    this.setState({
      selectedUser: data,
    });
  };

  changeToAll = (bool) => {
    console.log(bool);
    this.setState({
      allString: bool,
    });
  };
  componentDidMount() {
    fetch("https://reddit-saeed.herokuapp.com/api/v1/users")
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          usersList: data,
        })
      );
    fetch("https://reddit-saeed.herokuapp.com/api/v1/posts/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ postslist: data });
        console.log("these are all posts \n", data);
      });
  }

  componentDidUpdate(prevprps, prevstate) {
    if (
      this.state.selectedUser !== "said" &&
      prevstate.selectedUser !== this.state.selectedUser
    ) {
      fetch(
        `https://reddit-saeed.herokuapp.com/api/v1/posts/user/${this.state.selectedUser}`
      )
        .then((res) => res.json())
        .then((data) => {
          return this.props.search !== ""
            ? data.filter((post) => {
                return post.title.includes(this.props.search);
              })
            : data;
        })
        .then((result) => {
          this.setState({ postslist: result });
        });
    } else if (
      this.state.selectedUser === "said" ||
      prevprps.search !== this.props.search
    ) {
      fetch(`https://reddit-saeed.herokuapp.com/api/v1/posts`)
        .then((res) => res.json())
        .then((data) => {
          return this.props.search !== ""
            ? data.filter((post) => {
                return post.title.includes(this.props.search);
              })
            : data;
        })
        .then((result) => {
          this.setState({ postslist: result });
        });
    }
  }

  render() {
    return (
      <main className="content">
        <UserList
          selectedUser={this.state.selectedUser}
          setUserState={this.changeSelectedUser}
          usersList={this.state.usersList}
          allStr={this.state.allString}
          changeToAll={this.changeToAll}
        />
        <PostList
          search={this.props.search}
          allStr={this.state.allString}
          posts={this.state.postslist}
        />
      </main>
    );
  }
}
export default ContentSection;
