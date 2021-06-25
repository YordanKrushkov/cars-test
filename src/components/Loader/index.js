import './index.scss';
import React from 'react';

const Loader = ({ id }) => {
    return (
        <div id="loader">
            <h1>Loading...</h1>
            <div data-testid="loader" className={ `${'ring'} ${id}` }>
            </div>
        </div>

    );
}

export default Loader;