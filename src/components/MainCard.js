import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'
export class MainCard extends Component {
    render() {
        return (
            <div >
               <Card style={{ width: '18rem' ,margin:'15px 15px'}}>
  <Card.Img variant="top" src={this.props.img_url} style={{ width: '18rem' ,height:'300px' }}/>
  <Card.Body>
    <Card.Title>Car Model :{this.props.model}</Card.Title>
    <Card.Text>
      Year:{this.props.year}
      price:{this.props.price}
    </Card.Text>
    <Button variant="primary" onClick={()=>this.props.handleAddToFav(this.props)}>Add to favourite</Button>
  </Card.Body>
</Card> 
            </div>
        )
    }
}

export default MainCard
