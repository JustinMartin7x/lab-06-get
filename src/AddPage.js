import React, { Component } from 'react'
import fetch from 'superagent'
import { fetchClasses } from './fetch.js'

const localStorageUser = {
    userId: 1
}

export default class AddPage extends Component {
    state = {
        classes: []
    }

    componentDidMount = async () => {
        this.state.loading = true
        const data = await fetchClasses();
        this.setState({
            classes: data,
            loading: false
        })

    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const newShip = {
            name: this.state.name,
            weapons: this.state.weapons,
            docked: this.state.docked,
            size: this.state.size,
            class_id: this.state.class_id,
            image: this.state.image,
            owner_id: localStorageUser.userId,
        }
        await fetch
            .post('https://radiant-ridge-10683.herokuapp.com/ships')
            .send(newShip)

        this.props.history.push('/');
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })

    }
    handleWeapons = (e) => {
        this.setState({
            weapons: e.target.value
        })

    }
    handleDocked = (e) => {
        this.setState({
            docked: e.target.value
        })

    }
    handleSize = (e) => {
        this.setState({
            size: e.target.value
        })

    }
    handleClass = (e) => {
        this.setState({
            class_id: e.target.value
        })

    }
    handleImage = (e) => {
        this.setState({
            image: e.target.value
        })

    }
    render() {
        console.log(this.state.classes)
        return (
            <div className="add-page">
                {
                    !this.state.loading ?
                        <>
                            <header>
                                Add new ship to list
                        </header>

                            <section className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        Name
                    <input onChange={this.handleName}></input>
                                    </label>

                                    <label>
                                        weapons Number
                    <input type="number" onChange={this.handleWeapons}>
                                        </input>
                                    </label>

                                    <label>
                                        Docked
                    <select onChange={this.handleDocked}>
                                            <option value="true">yes</option>
                                            <option value="false">no</option>
                                        </select>
                                    </label>

                                    <label>
                                        size
                    <select onChange={this.handleSize}>
                                            <option value="small">small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="very large">Very Large</option>
                                            <option value="massive">Massive</option>
                                        </select>
                                    </label>

                                    <label>
                                        Ship Class
                    <select onChange={this.handleClass}>
                                            {
                                                this.state.classes.map((item, key) =>
                                                    <option value={item.id}>{item.name}</option>
                                                )
                                            }
                                        </select>
                                    </label>

                                    <label>
                                        Image
                    <input onChange={this.handleImage}>
                                        </input>
                                    </label>
                                    <button>submit</button>
                                </form>
                            </section>
                        </>
                        :
                        "Loading"
                }
            </div>
        )
    }
}
