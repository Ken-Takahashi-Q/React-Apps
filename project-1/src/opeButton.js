import {ACTIONS} from './App'

export default function opeButton({dispatch, ope}) {
    return (
        <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPE,
                                         payload: {digit}})}>
            {digit}
        </button>
    )
}