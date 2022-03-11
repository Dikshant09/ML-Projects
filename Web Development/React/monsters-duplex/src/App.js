import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    /* 
    this.handleChange = this.handleChange.bind(this); // we can also use this instead of arrow function, here we maually binding handleChange function with app class...
    */
  }
  handleChange = (e) => {
    this.setState({searchField : e.target.value});
  }

  // Life Cycle method
  // It fetch the data from below url and set state of the monster = users array we just fetched.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters duplex</h1>
        {/* Passing this handleChange function which will be called every time we write something in search box and it will upadte the searchField state and generate filteredMonsters acc.to that and send to the cardlist, cardlist will be rerendered.*/}
        {/* <SearchBox placeholder = 'search monsters' handleChange = { e => this.handleChange() }/> */}
        <SearchBox placeholder = 'search monsters' handleChange = { this.handleChange }/>
        
        {/* Passing This filtered Monster array to the CardList Component as props */}
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}

export default App;