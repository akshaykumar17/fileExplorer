import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { divFolderStyle, FileButton } from '../../../components/Style';

let i = 0;
let Color;
let columnColorTag;

class ListFiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleColor: false //this value is used to change 'button color' on every 'click' 
        };
    }

    /*######....
        */
    //this two functions below are to 'set color for each coloum'
    incr() {
        if (i > 3) {
            i = 0;
        }
        return i++;
    }
    setColor(c) {
        if (c % 4 === 0)
            return '#7C2A66'
        if (c % 4 === 1)
            return '#335DAB';
        if (c % 4 === 2)
            return '#C9275E';
        if (c % 4 === 3)
            return '#E26519'
    }

    /*######....
        */
    // these functions are for render actions 
    atButtonClick(e) {
        i=i%4;
        let id = e.currentTarget.id;
        let giveColor = e.currentTarget;
        Color = this.setColor(e.target.value);

        this.props.selectedFiles
            .filter((fid) => {
                if (fid === id) {
                    id = -1;
                }
                return (fid !== id);
            });
        if (id >= 0) {
            this.props.setSelectedFiles(id);
            giveColor.style.backgroundColor = Color;
            giveColor.style.color = '#FFFFFF';
        }
        if (id < 0) {
            this.props.unSelectFiles(e.currentTarget.id);
            giveColor.style.backgroundColor = '#EAEAEA'
            giveColor.style.color = '#131313'
        }
    }

    render() {
        const { fileArray } = this.props;
        const { toggleColor } = this.state;

        if (!fileArray) {
            return <div></div>;
        }
        return (
            <div className="container-fluid" style={divFolderStyle} >
                <div className="row">
                    {fileArray.map((f) => {
                        columnColorTag = this.incr(); // this are for border colors
                        Color = this.setColor(columnColorTag); // this are for border colors
                        return (
                            <div className="col-sm-3" key={f.id*10+f.name}>
                                <div className="row">
                                    <FileButton key={f.id}
                                        id={f.id}
                                        value={columnColorTag}
                                        partColor={Color}
                                        onClick={this.atButtonClick.bind(this)}
                                        primary={toggleColor}
                                        className="btn-lg">
                                        <span className="glyphicon glyphicon-folder-open pull-left"></span>
                                        {f.name}
                                    </FileButton>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedFiles: state.file.selectedFile
    }
}

export default connect(mapStateToProps, actions)(ListFiles);
