import axios from "axios";

export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const getComments = () => {
    return async (dispatch) => {
        try {
            const res = await axios({
                method: "get",
                url: "http://localhost:3000/comments"
            });
            dispatch({ type: GET_COMMENTS, payload: res.data });
        } catch (err) {
            return console.log(err);
        }
    }
}

export const addComment = (data) => {
    return async (dispatch) => {
        try {
            await axios({
                method: "post",
                url: "http://localhost:3000/comments",
                data: data
            });
            dispatch({ type: ADD_COMMENT, payload: data });
        } catch (err) {
            return console.log(err);
        }
    }
}

export const editComment = (data) => {
    return async (dispatch) => {
        try {
            await axios({
                method: "put",
                url: `http://localhost:3000/comments/${data.id}`,
                data: { ...data }
            });
            dispatch({ type: EDIT_COMMENT, payload: { ...data } });
        } catch (err) {
            return console.log(err);
        }
    }
}

export const deleteComment = (commentId) => {
    return async (dispatch) => {
        try {
            await axios({
                method: "delete",
                url: `http://localhost:3000/comments/${commentId}`
            });
            dispatch({ type: DELETE_COMMENT, payload: commentId });
        } catch (err) {
            return console.log(err);
        }
    }
}