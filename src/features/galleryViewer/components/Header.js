import React from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar';
import { divHeaderStyle } from '../../../components/Style';
import { ImgButton } from '../../../components/ImgButton';

const Header = () => {
    return (
        <div className="container-fluid" style={divHeaderStyle} >
            <div className="row">
                <div className="col-sm-1" >
                    <Link to="/collection" >Collection </Link>
                </div>
                <div className="col-sm-1" >
                    <Link to="/" >Fields </Link>
                </div>
                <div className="col-sm-6">

                </div>
                <div className="col-sm-2" >
                    <div className="row">
                        <div className="col-xs-6" >
                            <SearchBar />
                        </div>
                        <div className="col-xs-3" >
                        </div>
                        <div className="col-xs-3" >
                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/plus [#1513].png')} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-2" >
                    <div className="row">
                        <div className="col-xs-3" >
                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/notification_bell [#1397].png')} />
                        </div>
                        <div className="col-xs-3" >
                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/grid_system [#1520].png')} />
                        </div>
                        <div className="col-xs-3" >
                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/help [#1435].png')} />
                        </div>
                        <div className="col-xs-3" >
                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/align_text_left [#913].png')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header