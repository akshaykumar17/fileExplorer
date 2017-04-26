// import React from 'react';
import { connect } from 'react-redux';
import App from './App'


export const AppStateless = App

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

