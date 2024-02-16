import { Work } from '../services/worksListInfo';
export const SET_WORKLIST_INFO = 'todo/worklistUpdated';
export const SET_TEXT_VALUE = 'todo/textUpdated';
export const SET_TEXTAREA_VALUE = 'todo/textAreaUpdated';
export const SET_MODAL_VISIBLE = 'todo/modalStatusUpdated';

export const setWorkList = (worksList: Work[]) => {
    return {
        type: SET_WORKLIST_INFO,
        payload: worksList
    };
};

export const setText = (text: string) => {
    return {
        type: SET_WORKLIST_INFO,
        payload: text
    };
};

export const setTextArea = (textArea: string) => {
    return {
        type: SET_WORKLIST_INFO,
        payload: textArea
    };
};

export const setModalVisible = (modalVisible: boolean) => {
    return{
        type: SET_MODAL_VISIBLE,
        payload: modalVisible
    };
};