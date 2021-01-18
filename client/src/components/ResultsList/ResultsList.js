// Import React
import React from "react";

// Import styling for search results list.
import "./ResultsList.css";

// Import UI commponents from the reactstrap framework.
// import { Card, CardHeader, CardBody } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

// Search results list component.
const ResultsList = props => (
    <Card className="search-results" id="results">
        <Card.Header>
            <h2 className="card-header">Search Results</h2>
        </Card.Header>
        <Card.Body>
            <ul className="list-group">{props.children}</ul>
        </Card.Body>
    </Card>
);

// Export search results list component.
export default ResultsList;
