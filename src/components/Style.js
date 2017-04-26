import '../index.css';
import styled from 'styled-components';

export const HTML = styled.html`
font-size: 100%;
` 

export const Button = styled.button`
    font-size: 1.25rem;
    margin: 0.5rem;
    color: ${props => props.primary ? '#7C2A66' : '#131313'}
    background: none;
    border: none;
    border-radius: 0.25rem;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
    `;
const Div = styled.div`
    font-size: 1.6rrem;
`;

const divCollectionStyle = {
  background: '#FAFAFA'
};

const divFolderStyle = {

  background: '#F9F9F9'
};

const divHeaderStyle = {
  background: '#FFFFFF'
};


const FileButton = styled.button`
    font-size: 1.3rem;
    margin: 1.8rem;
    padding-left: 0.5rem;
    width: 25rem;
    height: 4.5rem;
    color:  '#131313' ;
    background: ${props => props.primary ? `${props.partColor}` : '#EAEAEA'};
    border-left: solid 0.3rem;
    border-leftColor: ${props =>props.partColor};
    border-radius: 0rem;

    &:hover {
        box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
    }
    `;

const Hr = styled.hr`
    margin-top: 0px;
    margin-bottom: 0px;
    border: 0;
    border-top: 1px solid #EAEAEA;
`;


export { FileButton, Div, divCollectionStyle, divFolderStyle, divHeaderStyle,  Hr};