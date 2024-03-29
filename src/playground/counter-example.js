/*

 const user = {
 name: 'Kate',
 age: 23,
 location: 'Bettendorf'
 };

 function getLocation(location) {
 if(location){
 return <p>Location: {location}</p>;
 }
 }

 const templateTwo = (
 <div>
 <h1>{user.name ? user.name : 'Anonymous'}</h1>
 {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
 {getLocation(user.location)}
 </div>
 );
 */
/*
let count = 0;
const myId = 'someId';
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};



const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={myId} className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    //Pass in JSX you'd like to render and DOM element where you want to render it
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
    
*/

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);

            if(!isNaN(count)){
                this.setState(() => ({count}));
            }

        } catch(e) {

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

