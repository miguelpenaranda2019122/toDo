export const SET_WORKLIST_INFO = 'SET_WORKLIST_INFO';
export const SET_TEXT_VALUE = 'SET_TEXT_VALUE';
export const SET_TEXTAREA_VALUE = 'SET_TEXTAREA_VALUE';
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';

export const setWorkList = workList => dispatch => {
    dispatch({
        type: SET_WORKLIST_INFO,
        payload: workList
    });
};

export const setText = text => dispatch => {
    dispatch({
        type: SET_TEXT_VALUE,
        payload: text
    });
};

export const setTextArea = textArea => dispatch => {
    dispatch({
        type: SET_TEXTAREA_VALUE,
        payload: textArea
    });
};

export const setModalVisible = modalVisible => dispatch => {
    dispatch({
        type: SET_MODAL_VISIBLE,
        payload: modalVisible
    });
};