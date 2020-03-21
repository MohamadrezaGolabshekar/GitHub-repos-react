import React from 'react';

import { RepoListWrapper } from '../StyledComponents'
import RepoItem from '../RepoItem/RepoItem';

/**
 * this component acts like a container for repoItem
 */
const RepoList = ({ repos }) => (
    <RepoListWrapper>
        {
            repos.map(repo => <RepoItem key={repo.id} repo={repo} />)
        }
    </RepoListWrapper>
)

export default RepoList;