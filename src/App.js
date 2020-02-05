import React, { Component } from "react";
import {Route, Switch, Link } from "react-router-dom";

const Home = () => <div>Home</div>;

const About = () => <div>About</div>;

const Code = () => <div>Code</div>;

const Contact = () => <div>Contact</div>;

const info = () => <div>info</div>;

const MainMenu = () => {
	return (
	  <div>
		<Link to="/">
		  <button>home</button>
		</Link>
		<Link to="/about">
		  <button>About</button>
		</Link>
		<Link to="/code">
		  <button>code</button>
		</Link>
		<Link to="/contact">
		  <button>contact</button>
		</Link>
		<Link to="/info">
		  <button>info</button>
		</Link>
	  </div>
	);
  };
class App extends Component {

  render() {
    return (
        <>
		<MainMenu />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/code" component={Code} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/info" component={info} />
		</Switch>
		</>
    );
  }
}

export default App;
