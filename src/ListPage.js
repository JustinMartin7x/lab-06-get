import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchShips } from './fetch.js'

export default class App extends Component {

    state = {

        shipData: [],
        loading: true

    }



    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        const data = await fetchShips()
        this.setState({
            shipData: data,
            loading: false
        })
        console.log(this.state.objects)
    }

    render() {
        console.log(this.state.shipData)
        return (
            <div >
                <div>
                    <Link to="./AddPage">To Add Page </Link>
                </div>
                {
                    !this.state.loading ?

                        this.state.shipData.map((data, i) =>
                            <div>

                                <Link to={`/Details/${data.id}`} >

                                    <section className="shipCard">
                                        <img src={data.image} alt="ship" />
                                        <h1>Ship Name: {data.name}</h1>
                                        <h3>Ship Size: {data.size}</h3>
                                        <h3>Ship Class: {data.class_id}</h3>
                                        <h3>Weapons On-Board: {data.weapons} </h3>
                                    </section>

                                </Link>
                            </div>

                        ) :
                        "Loading"


                }



            </div >
        );
    }
}