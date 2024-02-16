import {
    SET_WORKLIST_INFO, SET_TEXT_VALUE,
    SET_TEXTAREA_VALUE, SET_MODAL_VISIBLE
} from './actions';

import { worksListInfo, Work } from '../services/worksListInfo';

const initialState = {
    workList: worksListInfo,
    text: '',
    textArea: '',
    modalVisible: false
}

type ToDoAction =
  | { type: typeof SET_WORKLIST_INFO; payload: Work[] }
  | { type: typeof SET_TEXT_VALUE; payload: string }
  | { type: typeof SET_TEXTAREA_VALUE; payload: string }
  | { type: typeof SET_MODAL_VISIBLE; payload: boolean };

function toDoReducer(state = initialState, action: ToDoAction ) {
    switch (action.type) {
        case SET_WORKLIST_INFO:
            return {...state, workList: action.payload };
        case SET_TEXT_VALUE:
            return {...state, text: action.payload };
        case SET_TEXTAREA_VALUE: 
            return {...state, textArea: action.payload };
        case SET_MODAL_VISIBLE:
            return {...state, modalVisible: action.payload };
        default:
            return state;
    }
}

export default toDoReducer;


