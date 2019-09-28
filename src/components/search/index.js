import React,{Component} from "react";
import {searchHot} from "@api";


export default class Search extends Component{
    render(){
        return(
            <div>
                search
            </div>
        );
    }
    async componentDidMount(){
        let dataHot = await searchHot();
        console.log(dataHot);
    }
}