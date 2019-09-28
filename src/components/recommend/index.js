import React,{Component} from "react";
import {getSongListRecommend,getSongRecommend} from "@api";

export default class Recommend extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                recommend
            </div>
        );
    }
    async componentDidMount(){
        let dataSongList = await getSongListRecommend(6);
        let dataSong = await getSongRecommend();
        console.log(dataSongList);
        console.log(dataSong);
        this.setState({

        });
    }
}