import React from 'react';

/*
 class Header extends React.Component {
     //Required method for react components
     render() {
         return (
             <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
             </div>
         );
     }
 }
 */

const Header = (props) => (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
        </div>
);

//Default Props
Header.defaultProps = {
    title: 'some default'
};

export default Header;
