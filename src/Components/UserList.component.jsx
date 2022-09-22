import "./css/userList.css";
import { Component } from "react";
import "./css/header.css";

class UserList extends Component {
  changeUserFilter = (event) => {
    console.log(event.target.id);
    const userId = event.target.id;
    this.props.setUserState(userId);
  };

  render() {
    const usersList = this.props.usersList;
    return (
      <section>
        <ul>
          {usersList.map((user) => (
            <li onClick={this.changeUserFilter} id={user.id} key={user.id}>
              {user.username}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default UserList;
