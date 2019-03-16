import React from 'react';
import Option from './Option.js';

/*
 class Options extends React.Component {
     render() {
         return (
             <div>
                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                 {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                 }
             </div>
         );
     }
 }
 */

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>

                <button
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
            {
                props.options.map((option, index) => (
                    <Option
                        count={index + 1}
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
);

export default Options;
