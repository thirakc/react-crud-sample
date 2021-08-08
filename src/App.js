import logo from './logo.svg';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import CreateProduct from './components/create-product.component'
import EditProduct from './components/edit-product.component'
import ProductList from './components/product-list.component'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar bg="dark" variat="dark">
          <Container>
            <NavBar.Brand>
              <Link to={"/create-product"} className="nav-link">
                React CRUD
              </Link>
            </NavBar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-product"} className="nav-link">
                  Create Product
                </Link>
              </Nav>
              <Nav>
                <Link to={"/product-list"} className="nav-link">
                  Product List
                </Link>
              </Nav>
            </Nav>
          </Container>
        </NavBar>

        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateProduct} />
                  <Route path="/create-product" component={CreateProduct} />
                  <Route path="/edit-product" component={EditProduct} />
                  <Route path="/product-list" component={ProductList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
