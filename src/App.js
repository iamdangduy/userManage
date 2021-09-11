import React, { Component } from 'react';
import AddUser from './component/AddUser';
import Jumbotron from './component/Jumbotron';
import SearchForm from './component/SearchForm';
import User from './component/User';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      display : true,
      inforSearch: ''
    }
  }

  changeDisplay = () => {
    this.setState({
      display : !this.state.display
    });
  }

  getSearch = (event) => {
    this.setState({
        inforSearch: event.target.value
    });
}
  

  render() {
    return (
        <>
        <Jumbotron></Jumbotron>
        <SearchForm inforSearch={this.state.inforSearch} getSearch={(dl) => this.getSearch(dl)}></SearchForm>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-6">
            <User></User>
          </div>
          <div className="col-2 mt-5">
            <AddUser globalState = {this.state.display} ketNoi={() => this.changeDisplay()}></AddUser>
          </div>
        </div>
        </>
    );
  }
}

export default App;