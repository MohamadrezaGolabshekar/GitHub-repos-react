import React from 'react';
import { Icon } from 'semantic-ui-react'
import useAppContext from "../../Store/Store";

/**
 * this is like component (the heart button in repo item)
 * it handle a click function to dispatch an action to our reducer and handle 
 * like and dislike repo
 */
const Like = ({ repo }) => {

    const [, dispatch] = useAppContext();

    return (
        <>
            <Icon
                name={`heart${!repo.isLiked ? ' outline' : ''}`}
                size='large'
                color={!repo.isLiked ? 'black' : 'red'}
                style={{cursor: 'pointer'}}
                onClick={() => {
                    dispatch({
                        type: repo.isLiked ? 'DISLIKE' : 'LIKE',
                        payload: { id: repo.id }
                    });
                }} />
        </>
    )
}

export default Like;