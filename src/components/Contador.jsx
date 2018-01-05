import React from 'react';

class Contador extends React.Component {
	constructor(){
		super();
		this.state = {contador: 0};
	}
    render() {
        return (
            <div>
            	<h2>{this.state.contador}</h2>
            	<p>Click the buttons to count</p>
            </div>
        );
    }
}

export default Contador;
