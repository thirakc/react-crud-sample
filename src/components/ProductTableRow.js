import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ProductDataService from '../services/product.service'

export default class ProductTableRow extends Component {

    constructor(props) {
        super(props)

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct() {
        ProductDataService.delete(this.props.obj.id)
        .then(res => {
            console.log("Product successfully deleted!")
        })
        .catch(err => {
            console.log(err)
        })
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
                    <Button onClick={this.deleteProduct} variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
}
