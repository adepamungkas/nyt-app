// Import React.
import React from "react";

// Import styling for saved articles component.
import "./SavedArticles.css";

// Import UI components from reactstrap framework.
import { Card, CardHeader, CardBody } from 'react-bootstrap';

// Saved articles component.
const SavedArticles = props => (
    <Card className="saved-articles main-content-section" id="articles">
        <Card.Header>
            <h2 class="card-header">Saved articles</h2>
        </Card.Header>
        <Card.Body>
            {/* <ul className="list-group search-results">
                {props.results.map(result => (
                    <li key={result} className="list-group-item">
                        <p />
                    </li>
                ))}
            </ul> */}
        </Card.Body>
    </Card>
);

// Export saved articles component.
export default SavedArticles;
