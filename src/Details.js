import React, { Component } from 'react'
import { fetchShip, deleteShip, fetchClasses, updateShips } from './fetch.js'
const userData = {
    userId: 1
}

export default class Details extends Component {
    state = {
        shipData: {},
        update: false,
        classes: [],
        weapons: 0,
        name: '',
        size: 'small',
        docked: true,
        image: 'none',
        class: 1
    }


    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        const ship = await fetchShip(`${this.props.match.params.id}`)
        const shipClasses = await fetchClasses()
        console.log(this.props.match.params.id)
        this.setState({
            classes: shipClasses,
            shipData: ship,
            loading: false
        })
        console.log(ship)
    }

    handleDelete = () => {
        deleteShip(this.state.shipData.id)
    }
    handleClick = () => {
        this.setState({
            update: true,
            name: this.state.shipData.name,
            weapons: this.state.shipData.weapons,
            docked: this.state.shipData.docked,
            size: this.state.shipData.size,
            class_id: this.state.shipData.class,
            image: this.state.shipData.image,

        })
    }
    handleSubmit = () => {
        const newShip = {
            name: this.state.name,
            weapons: this.state.weapons,
            docked: this.state.docked,
            size: this.state.size,
            class_id: this.state.class,
            image: this.state.image,
            owner_id: userData.userId,
        }
        updateShips(`${this.props.match.params.id}`, newShip)
    }
    render() {
        return (
            <div>
                {
                    !this.state.loading ?
                        <>
                            <section className="shipCard">
                                <img src={this.state.shipData.image} alt="ship" />
                                <h1>Ship Name: {this.state.shipData.name}</h1>
                                <h3>Ship Size: {this.state.shipData.size}</h3>
                                <h3>Ship Class: {this.state.shipData.class_id}</h3>
                                <h3>Weapons On-Board: {this.state.shipData.weapons} </h3>
                            </section>
                            <section>
                                <button onClick={this.handleDelete}>Delete</button>
                                <button onClick={this.handleClick}>update</button>

                            </section>
                        </>
                        :

                        "Loading"
                }
                {
                    this.state.update ?
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <p>edit ship data</p>
                                Name: <label>
                                    <input
                                        value={this.state.name}
                                        onChange={e => this.setState({ name: e.target.value })}>

                                    </input>
                                </label>
                                Docked:
                                <select onChange={e => this.setState({ docked: e.target.value })}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>

                                Weapons: <input type="number" value={this.state.weapons} onChange={e => this.setState({ weapons: e.target.value })}></input>

                                Size: <select
                                    onChange={e => this.setState({ size: e.target.value })}
                                >
                                    <option value="Extra-Small">small</option>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                    <option value="Extra-Large">Extra-Large</option>
                                    <option value="Massive">Massive</option>
                                </select>

                                Class: <select onChange={e => this.setState({ size: e.target.value })}>
                                    {
                                        this.state.classes.map((shipClass) =>
                                            <option
                                                selected={this.state.classes === shipClass.id}
                                                key={shipClass.id}
                                                value={shipClass.id}>
                                                {shipClass.name}
                                            </option>)
                                    }


                                </select>
                                <button>Upadate</button>




                            </form>
                        </div>



                        :
                        " "

                }


            </div>
        )
    }
}
