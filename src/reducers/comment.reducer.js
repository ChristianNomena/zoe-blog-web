import { GET_COMMENTS, ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT } from "../actions/comment.action";

const initialState = {};

export default function commentReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return action.payload;
        case ADD_COMMENT:
            return [action.payload, ...state];
    }
}