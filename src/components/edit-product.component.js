import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProductDataService from '../services/product.service'

export default class EditProduct extends Component {

    constructor(props) {
        super(props)
        this.onChangeProductName = this.onChangeProductName.bind(this)
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: "",
            description: "",
        }
    }

    componentDidMount() {
        ProductDataService.get(this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    onChangeProductName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeProductDescription(e) {
        this.setState({ description: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const productObject = {
            name: this.state.name,
            description: this.state.description
        }

        ProductDataService.update(this.props.match.params.id, productObject)
            .then(res => {
                console.log(res.data)
                console.log("Product successfully updated")
            })

        // Redirect to product list
        this.props.history.push("/product-list")
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Update Product</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName}/>
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={this.onChangeProductDescription}/>
                    </Form.Group>

                    <Button variant="success" size="lg" block="block" type="submit">
                        Update Product
                    </Button>
                </Form>
            </div>
        )
    }
}