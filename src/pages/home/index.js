import React,{Component} from "react";
import {layoutRoutes} from "@router";
import {NavLink} from "react-router-dom";
import {HomeWrapper} from "./styled";

export default class Home extends Component {
    render(){
        return(
            <HomeWrapper>
                <div className="header">
                    <span>
                        <i className="iconfont">&#xe6d0;</i>
                        <i>网易云音乐</i>
                    </span>
                    <span>
                        <i className="iconfont">&#xe507;</i>
                        <i>登录</i>
                    </span>
                </div>
                <ul>
                    {
                        layoutRoutes[0].children.map(item=>(
                            <li key={item.key}>
                                <NavLink to={item.path}>
                                    <p>{item.name}</p>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </HomeWrapper>
        );
    }
}