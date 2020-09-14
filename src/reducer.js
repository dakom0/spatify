export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Romove after finished developing
    // token: "cf40f01a1f3942eb95488385ecd0883c",
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
             return {
                ...state,
                token: action.token,
                }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
                }
        default:
            return state;
    }
}

export default reducer;