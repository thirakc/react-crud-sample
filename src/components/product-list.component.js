import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import ProductTableRow from './ProductTableRow'
import ProductDataService from '../services/product.service'
export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.DataTable = this.DataTable.bind(this)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        ProductDataService.getAll()
        .then(res=>{
            this.setState({
                products: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    DataTable() {
        return this.state.products.map((res, i)=>{
            return <ProductTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className="table-wrapper mt-5">
                <h1 class="mb-3">Product List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}