import React from 'react';

/*
 class Action extends React.Component {
     render() {
         return (
             <div>
                 <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                 >
                    What should I do?
                 </button>
             </div>
         );
     }
 }
 */

//Stateless functional component
const Action = (props) => (
        <div>
            <button
                className="big-button"
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
);

export default Action;