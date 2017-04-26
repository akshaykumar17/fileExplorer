import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import ListFiles from './ListFiles';
import { Div, divCollectionStyle, Hr } from '../../../components/Style';
import { DropDown } from '../../../components/DropDown';
import { ImgButton } from '../../../components/ImgButton';

class Collection extends Component {
    constructor(props) {
        super(props);

        props.getFilesInit()
    }
    getPageNo(lastPage) {
        if (!this.props.routeParams.id)
            return 1;
        return (_.parseInt(this.props.routeParams.id));
    }


    render() {
        const { file } = this.props;
        if (!file) {
            return <div></div>;
        }
        const lastPage = _.ceil(file.length / 16); // to divide files into 16 per each page
        const pageNo = this.getPageNo(lastPage);

        return (
            <nav>
                <div className="container-fluid" style={divCollectionStyle}>
                    <div className="row">
                        <Div className="col-md-3" >
                            <DropDown primary={true} val='Collection Name' />
                        </Div>
                        <div className="col-md-5 pull-center" >
                            <div className="row">
                                <div className="col-sm-2" >
                                    <DropDown val='name' />
                                </div>
                                <div className="col-sm-2" >
                                    <DropDown val='size' />
                                </div>
                                <div className="col-sm-2" >
                                    <DropDown val='date' />
                                </div>
                                <div className="col-sm-2" >
                                    <DropDown val='brand' />
                                </div>
                                <div className="col-sm-2" >
                                    <DropDown val='type' />
                                </div>
                                <div className="col-sm-2" >
                                    <ImgButton className="hidden-md-down" val={require('../../../static/Icons/toggle_button [#896].png')} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 " >
                            <div className="row">
                                <div className="col-sm-4" >

                                </div>
                                <div className="col-sm-4" >
                                    <div className="row">
                                        <div className="col-xs-4" >
                                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/list [#1422].png')} />
                                        </div>
                                        <div className="col-xs-4" >
                                            <ImgButton className="glyphicon glyphicon-info-sign pull-center img-circle hidden-md-down" />
                                        </div>
                                        <div className="col-xs-4" >
                                            <ImgButton className="hidden-md-down" val={require('../../../static/Icons/toggle_button [#896].png')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <Link to={"/collection/" + (pageNo - 1 === 0 ? 1 : pageNo - 1)}  >
                                        <ImgButton className="glyphicon  glyphicon-triangle-left" />
                                        {pageNo} of
                                    </Link>

                                    <Link to={"/collection/" + (pageNo + 1 === (lastPage + 1) ? lastPage : pageNo + 1)}  >
                                        {lastPage}
                                        <ImgButton className="glyphicon  glyphicon-triangle-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Hr />
                <ListFiles fileArray={_.slice(file, ((pageNo - 1) * 16), (pageNo * 16))} />
            </nav >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        file: state.file.allfiles[0]
    }
}

export default connect(mapStateToProps, actions)(Collection);