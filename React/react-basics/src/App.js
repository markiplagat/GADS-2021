import './App.css'
import CardList from '../src/github-cards-app/CardList'
import Form from './github-cards-app/Form'
import { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profiles: []
    }
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }
  render () {
    return (
            <div className="App">
                <Form onSubmit={this.addNewProfile}/>
                <CardList profiles={this.state.profiles}/>
            </div>
    )
  };
}

export default App
