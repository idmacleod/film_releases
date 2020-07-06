import React from 'react';

class Film extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.children}</a>
            </li>
        );
    }
}

export default Film;