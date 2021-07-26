
import React, { Component } from 'react'

import axios from 'axios'
import FavouriteCard from './FavouriteCard'
import { CardGroup,Spinner } from 'react-bootstrap'
import UpdateForm  from './UpdateForm'
const serverUrl=process.env.REACT_APP_SERVER_URL

export class Favourite extends Component {
constructor(props){
    super(props)
    this.state={
        favData:[],
        choosenToUpdate:{},
        showForm:false
    }
}
//=============================================================

componentDidMount=()=>{
axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))
}
//====================================================================
deleteFav=async(item)=>{
await axios.delete(`${serverUrl}/favourite/${item.id}`).then(response=>{

}).catch(error=>alert(error.message))

axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))

}
//============================================================================================

showUpdateForm=(item)=>{
    this.setState({
        choosenToUpdate:item,
        showForm:!this.state.showForm

    })
}
//===================================================================================================
updateFavs=async(e)=>{
    e.preventDefault()
    const id=this.state.choosenToUpdate.id
    const reqBody={
      price:e.target.price.value,
        model:e.target.model.value,
       img_url:e.target.img_url.value
    }
await axios.put(`${serverUrl}/favourite/${id}`,reqBody).then(response=>{
    this.setState({
        showForm:false
    })
    
}).catch(error=>alert(error.message))

axios.get(`${serverUrl}/favourite`).then(response=>{
    this.setState({
        favData:response.data
    })
}).catch(error=>alert(error.message))


    }












    render() {
        return (
            <div>



                {this.state.showForm&&
                <UpdateForm
                updateFavs={this.updateFavs}
                item={this.state.choosenToUpdate}
                />
                
                
                }
                {
                    this.state.favData.length>0?
            <CardGroup>
{
    this.state.favData.map((value,idx)=>{
        return(
            <FavouriteCard
            key={idx}
            id={value.id}
            model={value.model}
            price={value.price}
            img_url={value.img_url}
            year={value.year}
            deleteFav={this.deleteFav}
            showUpdateForm={this.showUpdateForm}
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

export default Favourite
