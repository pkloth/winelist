import React, {Component }from 'react';
import './App.css';
import WineList from './Components/WineList';
import AddWineForm from './Components/AddWineForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winelist: []
    }

    this.updateWineList = this.updateWineList.bind(this)
    this.postNewWine = this.postNewWine.bind(this)
  }

  fetchWinelist() {
    fetch('https://my-json-server.typicode.com/pkloth/winelist/data')
    .then(response => response.json())
    .then(data => {
      this.setState({
        winelist: data
      })
      console.log(data)
    })
    .catch(error => console.error(error))
  }

  componentDidMount() {
    this.fetchWinelist();
  }

  //Simulates a post - doesn't update the server
  postNewWine(newWine) {
    fetch('https://my-json-server.typicode.com/pkloth/winelist/data', {
    method: 'POST',
    body: JSON.stringify(newWine),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  }
  
  updateWineList(newList){
    this.setState({
      winelist: newList
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wine List</h1>
        </header>
        <div className="App__content">
          <WineList
              bottles = {this.state.winelist}
          />
          <AddWineForm
            data = {this.state.winelist}
            updateList = {this.updateWineList}
            addWine = {this.postNewWine}
          />
        </div>
      </div>
    );
  }
}


export default App;
