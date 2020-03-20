import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import { Base64 } from 'js-base64';
import useAppContext from "../Store/Store";
import RepoList from '../components/RepoList/RepoList';
import { RepoContainerWrapper } from '../components/StyledComponents';
import EmptyList from '../components/UI/EmptyList';
import { Icon } from 'semantic-ui-react'
import { getReadMe } from "../utils/getReadMe";
import ErrorMessage from '../components/UI/ErrorMessage';
import marked from "marked";
import {ReadMeSection} from "../components/StyledComponents"



const ReadMeContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [markdown, setMarkdown] = useState("");
    const [error, setError] = useState(null);
    let { repo, owner } = useParams();

    /**
     * @desc fetch repos data based and pagination data and input search
     * @param object queryObj - the query object for get repos like {offset : 10} 
     */
    const fetchReadMe = async (repoId, userId) => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        setIsLoading(true);
        try {
            const data = await getReadMe(repoId, userId, source.token);
            console.log('data : ', data);
            if(data && data.content) {
                setMarkdown(marked(Base64.decode(data.content)));
            } else {
                setError({ message: "ReadMe.md not found." });
            }
        } catch (err) {            
            setError({ message: err.message, code: err.code });
        } finally {
            setIsLoading(false);
        }
    }

    // like componentDidMount
    useEffect(() => {
        fetchReadMe(repo, owner);
    }, []);


    return (
        <>
            {
                error ?
                    <ErrorMessage message={error.message} code={error.code} /> :
                    <>
                        <Dimmer active={isLoading} inverted>
                            <Loader inverted size='large'>Getting ReadMe</Loader>
                        </Dimmer>
                        {markdown && <ReadMeSection>
                            <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
                        </ReadMeSection>}
                    </>
            }
        </>
    )
}

export default ReadMeContainer;