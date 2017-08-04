import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 
import Content from '../components/app/Content.js'


class ContentContainer extends Component {
}  

function mapStateToProps (state) {
    return {
        activeContent: state.mainMenu.activeContent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //contentContainerActions: bindActionCreators(contentContainerActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);