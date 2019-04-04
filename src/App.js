import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then()
    .catch(err => console.log(err))
  }

  // state를 변경하면 render는 다시 작동한다. 새로운 state와 함께
  /*
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  }
  */

  _renderMovies = () => {
    const movies = [this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })]
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
