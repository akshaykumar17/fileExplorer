import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';

const renderInput = (field) => {

    // Create an <Input> component that'll render an <input> tag with some styles
    const Input = styled.input`
    font-size: 1.25em;
    margin: 0.55em;
    color: palevioletred;
    background: #EAEAEA;
    border: none;
    border-radius: 3px;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
    `;
    return (
        <div>
            <Input  {...field.input} type={field.type} placeholder={field.placeholder} />
            {field.meta.touched && field.meta.error &&
                <span className="error ">{field.meta.error}</span>}
        </div>
    );
}

class SearchBar extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="hidden-xs-down" >
                    <fieldset className="form-group">
                        <Field
                            name="search"
                            component={renderInput}
                            type="text"
                            placeholder="Search in files" />
                    </fieldset>
                </form>
            </div>
        );
    }
};

const validate = (values) => {
    const errors = {};

    return errors;
}

const SeachBarForm = reduxForm({
    form: 'Search',
    validate
})(SearchBar);

export default connect()(SeachBarForm);

