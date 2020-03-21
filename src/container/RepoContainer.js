import React, { useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

import useAppContext from "../Store/Store";
import { getRepos } from '../utils/getRepos';
import RepoList from '../components/RepoList/RepoList';
import { RepoContainerWrapper } from '../components/StyledComponents';
import SearchInput from '../components/SearchInput/SearchInput';
import ErrorMessage from '../components/UI/ErrorMessage';
import EmptyList from '../components/UI/EmptyList';
import axios from 'axios';
import OwnerCard from '../components/OwnerCard/OwnerCard';
/**
 * main component and this acts like a container 
 */
const RepoContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(null);
    const [{ originalRepos, isFirstInit }, dispatch] = useAppContext();


    /**
     * @desc fetch repos data based on input search
     */
    const fetchData = async (userName) => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        setIsLoading(true);
        try {
            const data = await getRepos(userName, source.token);
            console.log('data : ', data)
            dispatch({
                type: 'FETCH_REPOS',
                payload: { repos: data }
            });
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError({ message: err.message, code: err.code });
        }
    }

    /**
     * @desc handle input search change for onChange searching
     * @param string val 
     */
    const onSearch = val => {
        if(isFirstInit) {
            dispatch({type: 'REMOVE_FIRST_INIT_MODE'})
        }
        if (val) {
            setSearchValue(val);
            fetchData(val);
        }
    }

    return (
        <>
            {
                error ?
                    <ErrorMessage message={error.message} code={error.code} /> :
                    <>
                        <Dimmer active={isLoading} inverted>
                            <Loader inverted size='large'>Getting Repos</Loader>
                        </Dimmer>
                        <RepoContainerWrapper isFirstInit={isFirstInit}>
                            <SearchInput onSearch={onSearch} />
                            <br />
                            <OwnerCard userName={searchValue} />

                            {
                                originalRepos && originalRepos.length ?
                                    <RepoList repos={originalRepos} /> :
                                    originalRepos && originalRepos.length === 0 && !isFirstInit && !isLoading ?
                                        <EmptyList title='Empty list' message='There is no repo with this search :(' /> :
                                        null
                            }


                        </RepoContainerWrapper>
                    </>
            }
        </>
    )
}

export default RepoContainer;