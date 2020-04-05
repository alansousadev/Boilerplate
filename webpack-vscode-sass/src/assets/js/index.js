// o que chamar aqui compila pro dist

// import _ from 'lodash';
// import printMe from './print.js';
// import Print from './print';
import '../../styl/styles.styl';
// import '../css/styles.scss';
import {cube} from './math.js';


// import $ from 'jquery';



function component() {
const element = document.createElement('div');

element.innerHTML = [
	'Hello webpack!',
	'5 cubed is equal to ' + cube(5)].join('\n\n');

return element;
}

document.body.appendChild(component());

