import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location} = this.props;
        if (location.state) {
        return (
        <div className="movie__detail">
                <img src={location.state.poster}/><br></br>
            <div className="movie__data">
                <h3>{location.state.title}</h3>
                <h5 className="movie__year">{location.state.year}</h5> 
                <ul className="movie__genres">
                {location.state.genres.map((genre, index) => {
                    return <li key={index} className="movie__genre">{genre}</li>
                })}
                </ul>    
                <p class="movie__summary">{location.state.summary}</p>
        </div>
        </div>);
        
        
        } else {
            return null;
        }
    }
}

export default Detail;