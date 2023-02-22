import {useReducer} from 'react';

import './App.css';
import DigitButton from './DigitButton';
import opeButton from './opeButton';

export const ACTIONS = {
	ADD_DIGIT: 'add-digit',
	CHOOSE_OPE: 'choose-ope',
	CLEAR: 'clear',
	DELETE_DIGIT: 'delete-digit',
	EVALUATE: 'evaluate'
}
function reducer(state, {type, payload}) {
	switch(type) {
		case ACTIONS.ADD_DIGIT:
			return {
				...state,
				currentOpe: `${currentOpe || ""}${payload.digit}`
			}
	}
}
function App() {
	const [{currentOpe, previuosOpe, ope}, dispatch] = useReducer(reducer, {})

	dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
	return (
		<div className="calculator-grid">
			<div className="output">
				<div className="previous">
					123 *
				</div>
				<div className="current">
					456
				</div>
			</div>

			<button className="span-two">AC</button>
			<button>DEL</button>
			<opeButton ope="÷" dispatch={dispatch} />
			<DigitButton digit="1" dispatch={dispatch} />
			<DigitButton digit="2" dispatch={dispatch} />
			<DigitButton digit="3" dispatch={dispatch} />
			<opeButton ope="*" dispatch={dispatch} />
			<DigitButton digit="4" dispatch={dispatch} />
			<DigitButton digit="5" dispatch={dispatch} />
			<DigitButton digit="6" dispatch={dispatch} />
			<opeButton ope="+" dispatch={dispatch} />
			<DigitButton digit="7" dispatch={dispatch} />
			<DigitButton digit="8" dispatch={dispatch} />
			<DigitButton digit="9" dispatch={dispatch} />
			<opeButton ope="-" dispatch={dispatch} />
			<DigitButton digit="." dispatch={dispatch} />
			<DigitButton digit="0" dispatch={dispatch} />
			<button className="span-two">=</button>

		</div>
	);
}

export default App;
