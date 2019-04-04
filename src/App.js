import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount() {
    this._getMoives()
  }

  // state를 변경하면 render는 다시 작동한다. 새로운 state와 함께
  /* componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  } */

  _renderMovies = () => {
    const movies = [this.state.movies.map(movie => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.large_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })]
    return movies
  }

  _getMoives = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    // 성공적인 수행이 아니어도 작업이 완료되면 then을 부른다.
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    )
  }
}

export default App;
