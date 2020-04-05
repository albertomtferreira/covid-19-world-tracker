import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.component';

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
    const {data, searchField} = this.state;
    const filteredData = data.filter(country => 
      country.country.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <SearchBox 
          placeholder='Search'
          handleChange={searchValue => this.setState({searchField:searchValue.target.value})}/>
        <CardList data={filteredData}/>
      </div>
    );
  }
}

export default App;