import React, { Component } from 'react'
import './App.css';
import fetch from 'superagent'

export default class App extends Component {
  state = {
    objects: [],
    loading: true
  }



  componentDidMount = async () => {
    this.setState({
      loading: true
    })
    const data = await fetch.get('https://safe-hollows-96416.herokuapp.com/ships')


    this.setState({
      objects: data.body,
      loading: false
    })
    console.log(this.state.objects)

  }

  render() {
    return (
      <div >
        {
          !this.state.loading ?

            this.state.objects.map((data, i) =>
              <div>
                <img src={data.image} alt="ship" />
                <h1>{data.name}</h1>
                <h3>{data.size}</h3>
                <h3>{data.class}</h3>
                <h3>{data.weapons}</h3>


              </div>
            ) :
            "Loading"

        }



      </div>
    );
  }
}


