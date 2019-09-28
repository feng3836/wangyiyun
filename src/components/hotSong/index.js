import React,{Component} from "react";
import {getHotSong} from "@api";

export default class HotSong extends Component{
    render(){
        return(
            <div>
                hotSong
            </div>
        );
    }
    async componentDidMount(){
        let data = await getHotSong(1);
        console.log(data);
    }
}