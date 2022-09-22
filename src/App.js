// import logo from "./logo.svg";
// import { render } from "@testing-library/react";
import { Component } from "react";
import "./App.css";
import ContentSection from "./Components/ContentSection.component";
import Header from "./Components/Header.component";

class App extends Component {
  state = {
    search: "",
  };
  setSearch = (newSearch) => {
    this.setState({
      search: newSearch,
    });
  };
  render() {
    return (
      <div className='App'>
        <Header setSearch={this.setSearch} search={this.state.search} />
        <ContentSection search={this.state.search} />
      </div>
    );
  }
}

export default App;
