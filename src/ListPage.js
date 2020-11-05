import React, { Component } from 'react'
import fetch from 'superagent'
import { Link } from 'react-router-dom'

export default class App extends Component {
    state = {
        objects: [],
        loading: true
    }



    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        const data = await fetch.get('https://radiant-ridge-10683.herokuapp.com/ships')
        this.setState({
            objects: data.body,
            loading: false
        })
        console.log(this.state.objects)
    }

    render() {
        return (
            <div >
                <div>
                    <Link to="./AddPage">To Add Page </Link>
                </div>
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