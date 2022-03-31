export const initialState ={
    todos: [],
};
const reducer = (state,action) => {
    switch(action.type){
        case'ADD_TODO':
            return {
             ...state,
             todos: [action.payload, ...state.todos]
         };
        default:
            return {
                ...state,
            };

    }
};
export default reducer;
