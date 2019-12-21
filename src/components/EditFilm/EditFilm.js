import React, {Component} from 'react';
import {connect} from 'react-redux';

class EditFilm extends Component{

  state = {
    id: '',
    title: '',
    poster: '',
    description: '',
    name: ''
  }

  componentDidMount(){
    this.setState(this.props.reduxState[0])
  }

  // Set state to input value
  handleChange = (event, propName) => {
    this.setState({
      ...this.state,
      [propName]: event.target.value
    })
  }

  // Return to film details page
  goBack = () => {
    this.props.history.push(`/details`);
  }

  // Return to film details page
  handleClickCancel = () => {
    this.goBack();
  }

  // Dispatch state to Saga, return to details page
  handleClickSave = () => {
    this.props.dispatch({type: `EDIT_FILM`, payload: this.state});
    this.goBack();
  }

  render(){
    return(
      <div className="main-edit-div">
        {this.props.reduxState.map((film, i)=>
          <div key={i}>
            <input type="text" onChange={(event)=>this.handleChange(event, 'title')} value={this.state.title} />
            <input type="text" onChange={(event)=>this.handleChange(event, 'name')} value={this.state.name} />
            <input type="text" onChange={(event)=>this.handleChange(event, 'poster')} value={this.state.poster} />
            <textarea rows="6" cols="30" onChange={(event)=>this.handleChange(event, 'description')} value={this.state.description}></textarea>
            <button onClick={this.handleClickCancel}>CANCEL</button>
            <button onClick={this.handleClickSave}>SAVE</button>
          </div>
        )}
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState)=>({
  reduxState: reduxState.thisFilmReducer
});

export default connect(putReduxStateOnProps)(EditFilm);