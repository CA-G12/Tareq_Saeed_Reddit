import { Component } from "react";
import "./css/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }
  //this is Art of Art We Art

  handleSearchChange = (event) => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log(this.props.search, "weee Art the Art");
    }, 1000);
    this.props.setSearch(event.target.value);
  };
  render() {
    return (
      <header>
        <h1>Reddit</h1>
        <input
          type='text'
          name='searchPosts'
          value={this.props.search}
          onChange={this.handleSearchChange}
        ></input>
      </header>
    );
  }
}
export default Header;
