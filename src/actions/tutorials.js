import { async } from "q";
import tutorialServices from "../services";
import {
    GET_ALL_TUTORIALS,
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS, 
} from "./types";

export const getAllTutorials = () => async (dispatch) => {
    try {
        const res = await tutorialServices.getAll();

        dispatch({
            type: GET_ALL_TUTORIALS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err)
    }
};

export const createTutorial = (title, description) => async (dispatch) => {
    try {
        const res = await tutorialServices.create({ title, description });
        dispatch({
            type: CREATE_TUTORIAL,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const updateTutorial = (id, data) => async (dispatch) => {
    try {
        const res = await tutorialServices.update(id, data);
        dispatch({
            type: UPDATE_TUTORIAL,
            payload: data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteTutorial = (id) => async (dispatch) => {
    try {
        const res = await tutorialServices.remove(id);
        dispatch({
            type: DELETE_TUTORIAL,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllTutorials = () => async (dispatch) => {
    try {
        const res = await tutorialServices.removeAll();
        dispatch({
            type: DELETE_ALL_TUTORIALS,
            payload: res.data,
        });
    } catch(err) {
        console.log(err);
    }
};