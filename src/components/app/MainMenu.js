import React, {PropTypes, Component} from 'react'

export default class MainMenu extends Component {
    componentWillMount() {
        this.props.mainMenuActions.getMainMenu();
    }
   setActiveContent(activeContent) {
         this.props.mainMenuActions.setActiveContent(activeContent);
    }

    render() {
        const menuItems = this.props.mainMenu.menuItems; 
        const fetching = this.props.mainMenu.fetching;
        const that = this;

        const menuList = menuItems.map(function(item, index){
            let divStyle = {backgroundImage: item.icon}
            return <li key={index}>
                <a onClick={() => that.setActiveContent(item.activeContent)}>                
                    <div className="menu-icon" style={divStyle}></div>{item.name}
                </a>
            </li>
            });

        return <nav className="main-menu">
            {fetching ? <span>Loading...</span>
            :
            <ul className="menu-list">{menuList}</ul>}                       
        </nav>
    }
}
