import React from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { ItemImg, RepoTitle } from '../StyledComponents';
import Like from '../Like/Like';

/**
 * it is just a placeholder for a repo item data and for it I used 
 * Card component from semantic-ui-react and some other custom component
 */
const RepoItem = ({ repo }) => {
    return (
        <Card>
            <Card.Content header={repo.name} style={{ wordWrap: "break-word"}}/>
            <Card.Content description={repo.description || "No description"} />
            <Card.Content extra style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <div>
                    <Icon name='code'/>{repo.language || "Language not selected"}
                </div>
                <Like repo={repo} isLike={repo.isLiked} />
            </Card.Content>
        </Card>
    )
}

export default RepoItem;