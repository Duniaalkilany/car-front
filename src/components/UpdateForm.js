import React, { Component } from 'react'
import { Form ,Button } from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
               <Form onSubmit={this.props.updateFavs}>
  <Form.Group className="mb-3" controlId="img_url">
    <Form.Label>Car Image:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.img_ur} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="model">
    <Form.Label>Car model:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.model} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="price">
    <Form.Label>Car price:</Form.Label>
    <Form.Control type="text" placeholder={this.props.item.price} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
            </div>
        )
    }
}

export default UpdateForm
