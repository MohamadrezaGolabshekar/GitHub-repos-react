import React from 'react';
import { Icon } from 'semantic-ui-react'
import {CenterContainer, Title, Message} from '../StyledComponents';

/**
 * error component, it prints a error message 
 * I wanted to use ErrorBoundary component but I think you want to test this app
 * locally and because of that I prefer to do not use it
 */
const ErrorMessage = ({ message, code }) => {
    
    return (
        <CenterContainer>
            <Icon name='frown outline' size='massive' color='red'/>
            <Title>
                Something went wrong {code ? `with ${code} code` : ''}
            </Title>
            <Message>{message}</Message>
        </CenterContainer>
    )
}

export default ErrorMessage;