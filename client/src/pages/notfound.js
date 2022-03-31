import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

const NotFoundPage = () => {
    return (<>
        <Container>
            <h1>404 Page not found</h1>
            <Button href="/">Go home</Button>
        </Container>
    </>);

}

export default NotFoundPage;