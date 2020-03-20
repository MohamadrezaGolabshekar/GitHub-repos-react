import React from 'react';
import { Icon } from 'semantic-ui-react'
import { CenterContainer, Title, Message } from '../StyledComponents';

/**
 * empty list component prints a custom message for empty list
 */
const EmptyList = ({ title, message }) => {

    return (
        <CenterContainer>
            <Icon name='list alternate outline' size='massive' color='grey' />
            <Title color='#bbbbbb'>{title}</Title>
            <Message color='#8e8e8e'>{message}</Message>
        </CenterContainer>
    )
}

export default EmptyList;