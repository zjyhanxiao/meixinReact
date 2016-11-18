require('normalize.css/normalize.css');
require('styles/App.css');

import React, { PropTypes } from 'react';


class TestComponent extends React.Component {
    render() {
        return (
            <div>
                aaaaaaa
            </div>
        );
    }
}

TestComponent.defaultProps = {
};

export default TestComponent;
