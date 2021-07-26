import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class FavouriteCard extends Component {
    render() {
        return (
            <div>
               <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.img_url} style={{ width: '18rem'  }}/>
  <Card.Body>
    <Card.Title>Car Model :{this.props.model}</Card.Title>
    <Card.Text>
      Year:{this.props.year}
      price:{this.props.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.deleteFav(this.props)}>Delete</Button>
    <Button variant="primary"  onClick={()=>this.props.showUpdateForm(this.props)}>Update</Button>
  </Card.Body>
</Card>  
            </div>
        )
    }
}

export default FavouriteCard
