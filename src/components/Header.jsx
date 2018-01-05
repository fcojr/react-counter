import React from 'react';
import logo from '../img/logo.svg';
class Header extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		titulo: "First SetStage App"
	// 	}
	// }
    render() {
        return (
	        <div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		          <h1>{this.props.App.titulo}</h1>
		        </header>
	        </div>
        );
    }
}
export default Header;