import React, { Component } from 'react'
import './App.css'
import { getAllTheData } from './Api'

class PlantCard extends Component {
  render () {
    return (
      <div className='plant-card'>
        <p>Name: {this.props.data.name}</p>
        <p>Moisture: {this.props.data.moisture}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      allTheData: null
    }
  }

  componentDidMount () {
    getAllTheData().then((data) => {
      this.setState({ allTheData: data })
    })
  }

  makeFakePlant () {
    return {
      name: Math.random().toString(36).slice(2, 7),
      moisture: Math.round((Math.random() * 100)).toString() + '%'
    }
  }

  render () {
    console.log(this.state)
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Sample Plant Cards</h1>
        </header>

        <div className='card-container'>
          {Array(10).fill(0).map((_, i) => <PlantCard data={this.makeFakePlant()} key={i} />)}
        </div>

      </div>
    )
  }
}

export default App
