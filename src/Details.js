import React, { Component } from 'react'
import { fetchShip } from './fetch.js'

export default class Details extends Component {
    state {
    shipData: { }
}

componentDidMount = async () => {
    this.setState({
        loading: true
    })
    const ship = fetchShip({ this.props.match.params.id })
    await sleep(20)
    console.log(this.props.match.params.id)

    this.setState({
        shipData: ship.body,
        loading: false
    })
}
render() {
    return (
        <div>

        </div>
    )
}
}
