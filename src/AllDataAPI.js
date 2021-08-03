import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AllColorsCard from './components/AllColorsCard';


class AllDataAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            selectedData: {},
            userEmail:'',
        }
    }

    componentDidMount = async () => {

        let resData = await axios.get(`${process.env.REACT_APP_SERVER}/getAllColors`);
        await this.setState({
            colors: resData.data
        })
        console.log(this.state.colors)
    }

    addToFav = (item) => {
        const {user}=this.props.auth0;

        let data ={
            title:this.state.colors[item].title,
            imageUrl:this.state.colors[item].imageUrl,
            email:user.email
        }
        this.setState({
         
            userEmail:user.email
        })
        console.log(this.state.userEmail)
        axios.post(`${process.env.REACT_APP_SERVER}/addToFav/:${this.state.userEmail}`,data)
    }


    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                {this.state.colors.map((item, index) => {
                    return (
                        <AllColorsCard colorsData={item} index={index} addToFav={this.addToFav} />
                    )
                })}

            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
