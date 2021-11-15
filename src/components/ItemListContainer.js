import React, { Component } from 'react'

export default class ItemListContainer extends Component {
    render() {
        return (
            <div>
                {this.props.greeting}
            </div>
        )
    }
}
