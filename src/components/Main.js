
import React, { Component } from 'react'
import axios from 'axios'
import { CardGroup,Spinner } from 'react-bootstrap'
import MainCard from './MainCard'
const serverUrl=process.env.REACT_APP_SERVER_URL
export class Main extends Component {

constructor(props){
    super(props)
    this.state={
        carData:[]
    }
}
//====================================================================================
componentDidMount=()=>{
    axios.get(`${serverUrl}/apidata`).then(response=>{
        this.setState({
            carData:response.data
        })
        console.log(this.carData);
       
    }).catch(error=>alert(error.message))
}
//====================================================================================
handleAddToFav=(item)=>{
    const reqBody={
        model:item.model,
        year:item.year,
        price:item.price,
        img_url:item.img_url,
        id:item.id
    }
    axios.post(`${serverUrl}/favourite`,reqBody).then(response=>{
    if(response.data==='already exsist'){alert('already in your fav list ')
}else{
    alert('added successfully baby')
}
    }).catch(error=>alert(error.message))
}


    render() {
        return (
            <div>
              {
                  this.state.carData.length>0?
                  <CardGroup>
{
    this.state.carData.map((value,idx)=>{
        return(
            <MainCard
            
            id={value.id}
            model={value.model}
            price={value.price}
            img_url={value.img_url}
            year={value.year}
            handleAddToFav={this.handleAddToFav}
            
            />
        )
    })
}
                  </CardGroup>:
                  <Spinner animation="border" variant="primary" />
              }  
            </div>
        )
    }
}

export default Main
