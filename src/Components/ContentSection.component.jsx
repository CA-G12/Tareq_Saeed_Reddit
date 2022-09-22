import { Component } from "react";
import "./css/contentSection.css";
import UserList from "./UserList.component";
class ContentSection extends Component {
  state = { usersList: [], selectedUser: 0 };
  changeSelectedUser = (data) => {
    this.setState({
      selectedUser: data,
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
  }

  render() {
    return (
      <main>
        <UserList
          selectedUser={this.state.selectedUser}
          setUserState={this.changeSelectedUser}
          usersList={this.state.usersList}
        />
      </main>
    );
  }
}
export default ContentSection;
