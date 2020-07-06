import React from 'react';

class FilmList extends React.Component {
    render() {
        const filmNodes = this.props.films.map(film => <li>{film.name}</li>);

        return (
            <ul>
                {filmNodes}
            </ul>
        );
    }
}

export default FilmList;