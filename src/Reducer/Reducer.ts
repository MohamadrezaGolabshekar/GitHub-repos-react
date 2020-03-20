import {likeAndDislike, checkLiked} from '../utils/reducerUtils';

const initialState: any = {
    originalRepos: [],
    likedRepos: [],
    user: {}
};

const appReducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case "FETCH_REPOS":
            return { ...state, originalRepos: checkLiked(action.payload.repos, state.likedRepos) };
        case "SET_USER":
        console.log('action.payload.user :: ', action.payload.user)
            return { ...state, user: action.payload.user };
        case "LIKE":
            const { cloneOriginalRepos: cloneOrg, cloneLikedRepos: cloneLiked } = likeAndDislike(true, action.payload.id, state.originalRepos, state.likedRepos);
            return { ...state, likedRepos: cloneLiked, originalRepos: cloneOrg };
        case "DISLIKE":
            const { cloneOriginalRepos: cloneOrgDislike, cloneLikedRepos: cloneLikedDislike } = likeAndDislike(false, action.payload.id, state.originalRepos, state.likedRepos);
            return { ...state, likedRepos: cloneLikedDislike, originalRepos: cloneOrgDislike };
        default:
            return state;
    }
}

export { appReducer, initialState }


