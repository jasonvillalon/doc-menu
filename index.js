import React, { PropTypes } from "react"
import {Link} from "react-router"

import dependencies from "./dependencies"

const Item = React.createClass({
  onClick(e) {
    if (this.props.onItemClick) {
      this.props.onItemClick(this.props)
    }
  },
  render() {
    return (
      <li>
        <Link activeClassName="menu-active" to={this.props.to} onClick={this.onClick}>{this.props.title}</Link>
        <div className="menu-content">
          {this.props.children}
        </div>
      </li>
    )
  }
})

const Menu = React.createClass({
  render() {
    let items = this.props.children.map(item => {
      return (
        <Item {...item.props}>
          {item.props.children}
        </Item>
      )
    })
    return (
      <ul className={"menu" + (this.props.className ? ` ${this.props.className}` : "")}>
        {items}
      </ul>
    )
  }
})

const DocMenu = React.createClass({
  populateItems(item) {
    let subItems
    if (item.subItems) {
      subItems = this.populateMenu(item.subItems, true)
    }
    return (
      <Item {...this.props} {...item}>
        {subItems}
      </Item>
    )
  },
  populateMenu(items, isSubMenu = false) {
    if (!items) return
    let menuItems = items.map(this.populateItems)
    return (
      <Menu className={isSubMenu ? "sub-menu" : ""}>
        {menuItems}
      </Menu>
    )
  },
  render() {
    let menuItems = this.populateMenu(this.props.items)
    return (
      <div className="docmenu ">
        {menuItems}
      </div>
    )
  }
})

export default DocMenu
