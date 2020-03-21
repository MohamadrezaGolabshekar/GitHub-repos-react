import React, { useEffect } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import useAppContext from "../../Store/Store";
import axios from 'axios';
import { getUser } from '../../utils/getUser';

const OwnerCard = ({ userName }) => {

    const [{ user }, dispatch] = useAppContext();

    const fetchData = async (userName) => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        try {
            const userData = await getUser(userName, source.token);
            dispatch({
                type: 'SET_USER',
                payload: { user: userData }
            });
        } catch (err) {
            console.log("error in get user data :: ", err);
            dispatch({
                type: 'SET_USER',
                payload: { user: {} }
            });
        }
    }

    useEffect(() => {
        if (userName) {
            fetchData(userName);
        }
    }, [userName]);

    return (
        <>
            {
                user && user.id &&
                <Card>
                    <Image src={user.avatar_url} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{user.login}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in {new Date(user.created_at).toLocaleDateString()}</span>
                        </Card.Meta>
                        <Card.Description>
                            {user.name} {user.location && "is living in"} {user.location}.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                            <Icon name='user outline' />
                            {user.followers} Followers
                        </span>
                        <span>
                            <Icon name='user outline' />
                            {user.following} following
                        </span>
                    </Card.Content>

                    <Card.Content extra>
                        <Icon name='file code outline' />
                        {user.public_repos} Public repos
                    </Card.Content>
                </Card>
            }
        </>
    )
}

export default OwnerCard;