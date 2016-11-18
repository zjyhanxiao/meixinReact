require('normalize.css/normalize.css');
require('styles/App.css');
require('es6-promise').polyfill();
import React from 'react';
import fetch from 'isomorphic-fetch';
// import React from 'react';


class GetJsonComponent extends React.Component {
    componentWillMount(){
        // alert(111);
    }
    componentDidMount() {
        function status(response) {
            if (response.status >= 200 && response.status < 300) {
                return response
            }
            throw new Error(response.statusText)
        }

        function json(response) {
            return response.json()
        }

        fetch('https://api.meixinglobal.com/web/product/first_page')
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                console.log(stories);
            });
    }

    render() {
        return (
            <div>
                aaaaaaa
            </div>
        );
    }
}

GetJsonComponent.defaultProps = {};

export default GetJsonComponent;
