import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.component';
import Footer from './components/footer/footer.component';
import Scroll from './components/scroll/scroll';

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

  handleChange = (searchValue) => {
    this.setState({searchField:searchValue.target.value})
  }

  render() {
    const {data, searchField} = this.state;
    const filteredData = data.filter(country => 
      country.country.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Covid-19 World Tracker</h1>
        <SearchBox 
          placeholder='Search'
          handleChange={this.handleChange}/>
        <Scroll>
        <CardList data={filteredData}/>
        </Scroll>
        <Footer/>
      </div>
    );
  }
}
// <Footer/>
export default App;