import { Component } from "react";
import "./css/contentSection.css";
import PostList from "./PostList.component";
import UserList from "./UserList.component";
class ContentSection extends Component {
  state = {
    usersList: [],
    selectedUser: 6,
    postslist: [],
    allString: false,
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
    })
  }
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
        this.setState({ postslist: data })
        console.log('these are all posts \n', data)
      });
  }

  componentDidUpdate(prevprps, prevstate) {
    console.log(this.state.allString, prevstate.allString);
    if (prevstate.selectedUser !== this.state.selectedUser) {
      fetch(`https://reddit-saeed.herokuapp.com/api/v1/posts/user/${this.state.selectedUser}`)
        .then((res) => res.json())
        .then(data => {
          return this.props.search !== '' ? data.filter(post => { return post.title.includes(this.props.search) }) : data
        })
        .then((result) => {
          this.setState({ postslist: result })
        }
        );
    } else if (prevprps.search !== this.props.search || this.state.selectedUser === 0) {
      fetch(`https://reddit-saeed.herokuapp.com/api/v1/posts`)
        .then((res) => res.json())
        .then(data => {
          return this.props.search !== '' ? data.filter(post => { return post.title.includes(this.props.search) }) : data
        })
        .then((result) => {
          this.setState({ postslist: result })
        }
        );
    } else if (this.state.allString === true && this.state.allString !== prevstate.allString) {
      
      fetch("https://reddit-saeed.herokuapp.com/api/v1/posts/")
        .then((res) => res.json())
        .then((data) => {
          this.setState({ postslist: data })
          console.log('these are all posts \n', data)
        });
    }


  };


  render() {
    return (
      <main>
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
          posts={this.state.postslist} />
      </main>
    );
  }
}
export default ContentSection;
