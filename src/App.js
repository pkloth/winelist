import React, { Component } from "react";
import "./App.css";
import WineList from "./Components/WineList";
import WineItem from "./Components/WineItem"
import AddWineForm from "./Components/AddWineForm";
import Filter from "./Components/Filter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winelist: [],
      showWine: null
    };

    this.updateWineList = this.updateWineList.bind(this);
    this.postNewWine = this.postNewWine.bind(this);
  }

  fetchWinelist() {
    fetch("https://my-json-server.typicode.com/pkloth/winelist/data")
      .then(response => response.json())
      .then(data => {
        this.setState({
          winelist: data
        });
        console.log(data);
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.fetchWinelist();
  }

  //Simulates a post - doesn't update the server
  postNewWine(newWine) {
    fetch("https://my-json-server.typicode.com/pkloth/winelist/data", {
      method: "POST",
      body: JSON.stringify(newWine),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }

  updateWineList(newList) {
    this.setState({
      winelist: newList
    });
  }

  showWine(wine) {
    this.setState( {
      showWine: wine
    })
  }

  render() {
    const wineTypes = ["red", "white", "rosé"]

    return (
      <div className="App">
        <header className="App-header">
          <h1>Wine List</h1>
        </header>
        <div className="App__content">
          <div className="App__content--left">
            <h3 className="App__content-title">Wines</h3>
            <Filter
              title="Filter wines"
              filterTypes={ wineTypes }
            />
            <WineList 
              wines={this.state.winelist} 
              handleClick={this.showWine.bind(this)}
            />
          </div>
          <div className="App__content--right">
            <h3 className="App__content-title">Wine Details</h3>
            { !this.state.showWine ?
              <div>
                Click on wine for details
              </div>
              :
              <WineItem 
                wine={this.state.showWine}
              />
            }
          </div>

          <div className="App__form">
            <AddWineForm
              data={this.state.winelist}
              updateList={this.updateWineList}
              addWine={this.postNewWine}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
