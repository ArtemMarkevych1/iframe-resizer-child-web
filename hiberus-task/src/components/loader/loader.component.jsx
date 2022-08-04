import React from 'react';
import {Spinner} from 'react-bootstrap';

import "./style.css"

function Loader() {
    return (
        <div className="loader">
            <Spinner animation="border" variant="primary" />
        </div>
    );
}

export default Loader;
