
import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        console.log("JUST PASSED componentDidMount")
    }
    render() {
        console.log("WOOT")
        return (
            <div>
                <h1>HOMEPAGE</h1>
                <h2>Campuses and images</h2>
                <button>Home</button>
                <button>Students</button>
                <button>Campuses </button>
            </div>
        )
    }
}