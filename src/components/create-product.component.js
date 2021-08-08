import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProductDataService from '../services/product.service'
export default class CreateProduct extends Component {

    constructor(props) {
        super(props)
        this.onChangeProductName = this.onChangeProductName.bind(this)
        this.onChangeProductDescription = this.onChangeProductDescription.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: "",
            description: ""
        }
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

        ProductDataService.create(productObject)
            .then(res => console.log(res.data))

        console.log("product successfully created!")
        console.log(`Name: ${this.state.name}`)
        console.log(`Description: ${this.state.description}`)

        this.setState({
            name: "",
            description: "",
        })
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Create Product</h1>
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
                        Create Product
                    </Button>
                </Form>
            </div>
        )
    }
}
