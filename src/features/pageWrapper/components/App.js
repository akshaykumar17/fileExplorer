import React, { Component } from 'react';
import Header from '../../galleryViewer/components/Header';
import { Hr } from '../../../components/Style';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Hr />
                {this.props.children}
            </div>
        );
    }
}

export default App;

