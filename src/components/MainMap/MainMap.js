import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class MainMap extends Component{

  // Dispatch selected film to Saga
  handleClick = (id) => {
    this.props.dispatch({type: `GET_THIS_FILM`, payload: id});
  }

  render(){
    return(
      <>
      {this.props.film.map((film, i)=>
        <div className="main-list-div" key={i}>
          <div className="column">
            <Link to={"/details/"+film.movie_id}>
              <img onClick={()=>this.handleClick(film.movie_id)} src={film.poster} alt={film.title} />
            </Link>
          </div>
          <div className="row">
            <div className="column film-title">{film.title}</div>
            <div className="column">{film.name}</div>
          </div>
          <div className="row">
            <div className="column">{film.description}</div>
          </div>
        </div>
      )}
      </>
    )
  }
}

export default connect()(MainMap);