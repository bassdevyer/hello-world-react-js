import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var myList = (
		<ul>
			<li>Pato</li>
			<li>Peto</li>
			<li>Pito</li>
			<li>Poto</li>
			<li>Puto</li>
		</ul>
	)

var toDoList = (
	<ol>
		<li>Learn React</li>
		<li>Become a developer</li>
	</ol>
	)

var myDiv = <div className="big">I AM A BIG DIV</div>

var imageHeight = "500px";
var imageWidth = "350px";

var negro = (
	<img
		src="images/negro.png"
		alt="negro"
		height={imageHeight}
		width={imageWidth}
	/>
)

var dog = "https://www.petinsurance.com/images/dog-bone.png"

var dogImg = (
	<img
		src={dog}
	/>
)

ReactDOM.render(
    dogImg,
  document.getElementById('app')
);