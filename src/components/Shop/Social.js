import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        return (
            <li>
                <a href={this.props.href} rel="noreferrer" target="_blank">
                    <img src={this.props.img} alt='img'/>
                </a>
            </li>
        )
    }
}
