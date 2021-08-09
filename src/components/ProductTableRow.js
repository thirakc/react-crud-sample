import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class ProductTableRow extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.description}</td>
                <td>
                    <Link className="edit-link btn btn-primary" to={"/edit-product/" + this.props.obj.id}>
                        Edit
                    </Link>
                    <Button onClick={() => this.props.onDelete(this.props.obj.id)} variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
}
