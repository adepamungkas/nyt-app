// Import React
import React, { Component,Input } from "react";

// Import styling for article search form.
//import "./SearchForm.css";

// Import UI components from reactstrap framework.
import { Card, Button, Form, FormGroup} from 'react-bootstrap';

// Search form component.
const SearchForm = (props) => {
  return (
    <div>
      <Card className="search-form" id="search-form">
        <Card.Header>
            <h2 className="card-header">Search articles</h2>
        </Card.Header>
        <Card.Body>
            <Form>
                <FormGroup>
                    <Form.Label for="topic" className="form-label">Topic (for example, sports)</Form.Label>
                    <Form.Control
                        value={props.query}
                        onChange={props.handleTopicChange}
                        type="text" 
                        name="topic" 
                        id="articleTopic" 
                        placeholder="" />
                </FormGroup>

                <FormGroup>
                <Form.Label for="startYear" className="form-label">Start year (YYYY)</Form.Label>
                <Form.Control
                        value={props.begin}
                        onChange={props.handleStartYearChange}
                        type="text" 
                        
                        name="startYear" 
                        id="startYear" 
                        placeholder="YYYY" />
                </FormGroup>

                <FormGroup>
                    <Form.Label for="endYear" className="form-label">End year (YYYY) </Form.Label>
                    <Form.Control
                        value={props.end}
                        onChange={props.handleEndYearChange}
                        type="text" 
                        name="endYear" 
                        id="endYear" 
                        placeholder="YYYY" />
                </FormGroup>

                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn search-btn"
                    variant="primary"
                    size="lg"
                >
                    Search
                </Button>
               
            </Form>

        </Card.Body>
      </Card>
    </div>
  );
};

// export search form.
export default SearchForm;