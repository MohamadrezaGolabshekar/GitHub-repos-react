import React from 'react';
import useAppContext from "../Store/Store";
import RepoList from '../components/RepoList/RepoList';
import { RepoContainerWrapper } from '../components/StyledComponents';
import EmptyList from '../components/UI/EmptyList';
import { Icon } from 'semantic-ui-react'

/**
 * a container for liked repos and for data it uses 
 * likedRepos array from our store (context API)
 */
const SavedReposContainer = () => {

    const [{ likedRepos }] = useAppContext();

    return (
        <>
            {
                likedRepos && likedRepos.length
                    ?
                    <RepoContainerWrapper>
                        <RepoList repos={likedRepos} />
                    </RepoContainerWrapper>
                    :
                    <EmptyList title='Empty list' message={<><Icon name='heart' size='small' color='red' />repos and come back here ;)</>} />
            }
        </>
    )
}

export default SavedReposContainer;