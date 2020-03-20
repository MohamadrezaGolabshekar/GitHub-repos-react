import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { ItemImg, RepoTitle } from '../StyledComponents';
import Like from '../Like/Like';
import { Link } from "react-router-dom";
import useAppContext from "../../Store/Store";
/**
 * it is just a placeholder for a repo item data and for it I used 
 * Card component from semantic-ui-react and some other custom component
 */
const RepoItem = ({ repo }) => {
    const [{user}] = useAppContext();

    return (
        <Card style={{ cursor: "default" }}>
            <Card.Content header={repo.name} style={{ wordWrap: "break-word" }} />
            <Card.Content description={repo.description || "No description"} />
            <Card.Content extra>
                <Icon name='code' />{repo.language || "Language not selected"}
            </Card.Content>
            <Card.Content extra style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    Updated at: {new Date(repo.updated_at).toLocaleDateString()}
                </div>
                <div>
                    <Link to={`/readme/${user.login}/${repo.name}`}>
                        <Icon style={{ cursor: 'pointer' }} size='large' name='eye' />
                    </Link>
                    <Like repo={repo} isLike={repo.isLiked} />
                </div>
            </Card.Content>
        </Card>
    )
}

export default RepoItem;