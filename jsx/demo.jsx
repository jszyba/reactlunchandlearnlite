import React from 'react';
import {render} from 'react-dom';

const places = [
    'Dominica','Grenada','Bahamas','Barbados','Antigua and Barbuda','St. John','Antigua','Montserrat'
];

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            names: props.names
        }
    }
    reverseName() {
        this.setState({
            names: this.state.names.reverse()
        })
    }
    render () {
        let names = this.state.names.map((name, i) =>
            <div key={i} className="name">{name}</div>
        );
        return (
            <div className="shopping-list" onClick={() => this.reverseName()}>
                {names}
            </div>
        )
    }
}

render(<Test names={places}/>, document.getElementById('root'));