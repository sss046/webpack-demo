var _ = require('lodash');
import {area} from './js/circle';
import aaa from './js/cube';
import './style.css';
import './hello.scss';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}
console.log(area(10));
console.log(aaa.bulk(10));

document.body.appendChild(component());