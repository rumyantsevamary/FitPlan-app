import React, {PropTypes, Component} from 'react'

export default class Logo extends Component {
    render() {
        return <div className="logo"> 
                    <div className="img"></div>          
                    <h1>                               
                        <span className="fit">Fit</span><span className="Plan">Plan</span>
                    </h1>
            </div>
    }
}
