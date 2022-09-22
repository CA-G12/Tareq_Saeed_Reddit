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
        <div className='usersList'>
          <div
            className='user'
            onClick={this.changeUserFilter}
            id={"said"}
            key={0}
          >
            all
          </div>
          {usersList.map((user) => (
            <div
              className='user'
              onClick={this.changeUserFilter}
              id={user.id}
              key={user.id}
            >
              {user.username}
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default UserList;
