import React from 'react';
import Film from './Film';

class FilmList extends React.Component {
    render() {
        const filmNodes = this.props.films.map(film => {
            return (
                <Film url={film.url} key={film.key}>
                    {film.name}
                </Film>
            );
        });

        return (
            <ul>
                {filmNodes}
            </ul>
        );
    }
}

export default FilmList;