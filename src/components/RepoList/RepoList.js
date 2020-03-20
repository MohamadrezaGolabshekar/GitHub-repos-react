import React, { useEffect, useState } from 'react';

import {RepoListWrapper} from '../StyledComponents'
import RepoItem from '../RepoItem/RepoItem';

/**
 * this component acts like a container for repoItem and Drawer (overlay)
 * I use lazy loading for Drawer because maybe user do not open it and I could reduce the bundle size
 */
const RepoList = ({repos}) => {

    const [isShow, setIsShow] = useState(false);
    const [detailRepo, setDetailRepo] = useState({});

    const openDrawer = repo => {
        setIsShow(true);
        setDetailRepo(repo);
    }

    const closeDrawer = () => {
        setIsShow(false);
    }

    /**
     * I use this logic in update phase because I used detailRepo for Drawer and it changed 
     * only on clicking on repo item and I missed change like status in Drawer 
     */
    useEffect(() => {
        if (isShow && detailRepo.id) {
            const repo = repos.find(repo => repo.id === detailRepo.id);
            const cloneRepo = repo ? {...repo} : {...detailRepo , isLiked: false};
            setDetailRepo(cloneRepo);
            if (!repo) setIsShow(false)
        }
    }, [repos])

    return (
        <>
        
        <RepoListWrapper>
        {
            repos.map(repo => <RepoItem key={repo.id} repo={repo} openDrawer={openDrawer}/>)
        }
        </RepoListWrapper>
        </>
    )
}

export default RepoList;