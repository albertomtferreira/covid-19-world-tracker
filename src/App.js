import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://corona.lmao.ninja/countries?sort=cases')
      .then(response => response.json())
      .then(country => this.setState({data: country}))
  }

  render() {
    return (
      <div className="App">
        <input 
          type='search'
          placeholder='Search' 
          onChange={searchValue => this.setState({searchField:searchValue.target.value})}
        />
        <CardList data={this.state.data}/>
      </div>
    );
  }
}

export default App;

