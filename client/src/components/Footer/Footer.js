// Import React
import React from 'react';

// Import UI components from reactstrap framework.
import { Card,  Button } from 'react-bootstrap';

// Import the Container component. 
import Container from "../../components/Container";

// Import css
import './Footer.css';

// Footer component
const Footer = (props) => {
    return (
        <div className="footer">
            <Container >
                <Card>
                    <Card.Body>
                        <Card.Title className="footer-heading">
                            New York Times Article Search
                        </Card.Title>
                        <Card.Text><b>Copyright &copy; 2020</b></Card.Text>
                        <a variant="default" href="https://github.com/adepamungkas/nyt-app" target="_blank" rel="noopener noreferrer" className="footer-button">
                            <Button variant="default"  size="sm">GitHub Repo</Button>
                        </a>
                        
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

// export Footer component.
export default Footer;
