import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  }
]

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    greeting: 'Hello!'
  }

  // state를 변경하면 render는 다시 작동한다. 새로운 state와 함께
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: 'Hello again!'
      })
    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {

          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
