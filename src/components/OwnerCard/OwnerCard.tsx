import React, { FC, useEffect, useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { ItemImg, RepoTitle } from '../StyledComponents';
import { IProp } from './interface';
import axios from 'axios';
import { getUser } from '../../utils/getUser';


/**
 * it is just a placeholder for a repo item data and for it I used 
 * Card component from semantic-ui-react and some other custom component
 */

const OwnerCard: FC<IProp> = ({ userName }: IProp) => {

    const [user, setUser]: any = useState({});

    const fetchData = async (userName: string) => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        try {
            const userData = await getUser(userName, source.token);
            console.log('userData : ', userData)
            setUser(userData)
        } catch (err) {
            console.log("error in get user data :: ", err);
            setUser({});
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
                    <Card.Content extra style={{display: "flex", justifyContent: "space-between"}}>
                        <a>
                            <Icon name='user outline' />
                            {user.followers} Followers
      </a>
      <a>
                            <Icon name='user outline' />
                            {user.following} following
      </a>
                    </Card.Content>

                    <Card.Content extra>
                        <a>
                            <Icon name='file code outline' />
                            {user.public_repos} Public repos
      </a>
                    </Card.Content>
                </Card>
            }
        </>
    )
}

export default OwnerCard;