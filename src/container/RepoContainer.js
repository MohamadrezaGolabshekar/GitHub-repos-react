import React, { useEffect, useState } from 'react';
import { Dimmer, Loader, Pagination } from 'semantic-ui-react'

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
    const [total, setTotal] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(null);
    const [{ originalRepos }, dispatch] = useAppContext();
    const limit = 3;


    /**
     * @desc fetch repos data based and pagination data and input search
     * @param object queryObj - the query object for get repos like {offset : 10} 
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
            setTotal(data.total);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError({ message: err.message, code: err.code });
        }
    }

    // like componentDidMount
    // useEffect(() => {
    //     fetchData();
    // }, []);


    /**
     * @desc handle change page in pagination and uses fetchData function
     * @param {*} e 
     * @param {*} data 
     */
    // const onPageChange = (e, data) => {
    //     setActivePage(data.activePage);
    //     const queryObj = { offset: data.activePage * limit - limit };
    //     if (searchValue) {
    //         queryObj.nameStartsWith = searchValue;
    //     }
    //     fetchData(queryObj);
    // }

    /**
     * @desc handle input search change for onChange searching
     * @param string val 
     */
    const onSearch = val => {
        setActivePage(1);
        setSearchValue(val);
        fetchData(val);
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
                        <RepoContainerWrapper>
                            <SearchInput onSearch={onSearch} />
                            <br />
                            {searchValue && <OwnerCard userName={searchValue} />}

                            {
                                originalRepos && originalRepos.length ?
                                    <>
                                        <RepoList repos={originalRepos} />
                                    </> :
                                    originalRepos && originalRepos.length === 0 ?
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