import React, {PropTypes, Component} from 'react'

export default class MainMenu extends Component {
    componentWillMount() {
        this.props.getMainMenu()
    }

    render() {
        const menuItems = this.props.menuItems 
        const fetching = this.props.fetching
        const menuList = menuItems.map(function(item, index){
            let divStyle = {backgroundImage: item.icon}
            return <li key={index}>
                <div className="menu-icon" style={divStyle}></div>
                {item.name}
            </li>
            })
        return <nav className="main-menu">
            {fetching ? <span>Loading...</span>
            :
            <ul className="menu-list">{menuList}</ul>}                       
        </nav>
    }
}

MainMenu.propTypes = {
    getMainMenu: PropTypes.func.isRequired   
}