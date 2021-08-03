import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap/'


 class AllColorsCard extends Component {
    render() {
        return (
            <Card key = {this.props.index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.colorsData.imageUrl}/>
            <Card.Body>
              <Card.Title>{this.props.colorsData.title}</Card.Title>
           
              <Button variant="primary" onClick={()=>this.props.addToFav(this.props.index)}>Add to fav</Button>
            </Card.Body>
          </Card>
        )
    }
}

export default AllColorsCard
