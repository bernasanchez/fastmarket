import React, { Component } from 'react'

export default class ItemListContainer extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Mi Card</h4>
                    <p className="card-text"> {this.props.greeting}</p>
                </div>
               
            </div>
        )
    }
}
