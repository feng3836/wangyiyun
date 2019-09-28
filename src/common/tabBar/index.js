import React, { Component } from 'react'
import { layoutRoutes } from "@router"
import { NavLink } from "react-router-dom"
import { TabBarWrapper } from "./styled"
export default class TabBar extends Component {
    render() {
        return (
            <TabBarWrapper>
                <ul>
                    {
                        layoutRoutes.map(item => (
                            <li key={item.key}>
                                <NavLink to={item.path}>
                                    <i className="iconfont">{item.icon}</i>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </TabBarWrapper>
        )
    }
}
