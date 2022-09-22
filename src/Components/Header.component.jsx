import { Component } from "react";
import "./css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }
  state = { searchPosts: "" };
  //this is Art of Art We Art

  handleSearchChange = (event) => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log(this.state.searchPosts, "weee Art the Art");
    }, 1000);
    this.setState(() => {
      return { searchPosts: event.target.value };
    });
  };
  render() {
    return (
      <header>
        <h1>Reddit</h1>
        <input
          type='text'
          name='searchPosts'
          value={this.state.searchPosts}
          onChange={this.handleSearchChange}
        ></input>
      </header>
    );
  }
}
export default Header;
