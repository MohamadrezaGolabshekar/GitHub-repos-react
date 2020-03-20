
/**
 * @desc this function get original data and liked array and create clone from them 
 * and for LIKE action, push to cloned liked array and add isLiked property to cloned data
 * and for DISLIKE, splice from cloned liked array and change isLiked property in original data
 * @param {*} boolean isLike 
 * @param {*} string id 
 * @param {*} array originalRepos 
 * @param {*} array likedRepos 
 */
export const likeAndDislike = (isLike, id, originalRepos, likedRepos) => {
    const cloneOriginalRepos = [...originalRepos];
    const likedRepoIndex = cloneOriginalRepos.findIndex(repo => repo.id === id);
    const cloneLikedRepo = { ...cloneOriginalRepos[likedRepoIndex] };
    cloneLikedRepo.isLiked = isLike;
    cloneOriginalRepos[likedRepoIndex] = cloneLikedRepo;

    const cloneLikedRepos = [...likedRepos];
    if (isLike) {
        cloneLikedRepos.push(cloneLikedRepo);
    } else {
        const likedIndex = cloneLikedRepos.findIndex(likedRepo => likedRepo.id === id);
        cloneLikedRepos.splice(likedIndex, 1);
    }

    return { cloneOriginalRepos, cloneLikedRepos };
}

/**
 * @desc for every fetch data for repos this function checked original data with likedArray to 
 * add isLiked property for change heart icon status
 * @param {*} array originalRepos 
 * @param {*} array likedRepos 
 */
export const checkLiked = (originalRepos, likedRepos) => {
    const cloneOriginalRepos = [...originalRepos];

    cloneOriginalRepos.forEach((item, index) => {
        if (likedRepos.findIndex(i => i.id === item.id) >= 0) {
            const cloneRepo = {...item};
            cloneRepo.isLiked = true;
            cloneOriginalRepos[index] = cloneRepo;
        }
    })
    return cloneOriginalRepos;
}