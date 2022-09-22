import "./css/userList.css";
import { Component } from "react";
import "./css/header.css";

class UserList extends Component {
  changeUserFilter = (event) => {
    console.log(event.target.id);
    const userId = event.target.id;
    this.props.setUserState(userId);
  };

  changeAll = (e) => {
    const userId = e.target.id;
    this.props.setUserState(userId);

    if (this.props.allStr === false) {
      this.props.changeToAll(true);
    }
    else this.props.changeToAll(false)
  }

  render() {
    const usersList = this.props.usersList;
    return (
      <section>
        <div className="usersList">
          <div className="user" onClick={this.changeAll} id={0}>
            all
          </div>
          {usersList.map((user) => (
            <div className="user" onClick={this.changeUserFilter} id={user.id} key={user.id}>
              {user.username}
            </div>
          ))}
        </div>
      </section>
    );
  }
}
export default UserList;
