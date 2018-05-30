import React, { Component } from 'react'
import DvCard from './components/dvcard/DvCard'
import './App.css';

class App extends Component {
  state = {
    description: 'Soy desarrollador web frontend, utilizo el framework React, pero no significa que este casado con el. Me gusta probar tecnologias nuevas como VueJS. Me gusta mucho aprender, todos los dias leo y veo videos de tecnologias web nuevas. Tengo 17 años.',
    certificados: [
      {name: 'VueJs', url: 'https://platzi.com/@davidjvicent/curso/vuejs/diploma/', imageUrl: '../public/images/vuejs.png'},
      { name: 'Python', url: 'https://platzi.com/@davidjvicent/curso/python/diploma/', imageUrl: '../public/images/python.png' },
      { name: 'Desarrollo Web Online', url: 'https://platzi.com/@davidjvicent/curso/html5-css3/diploma/', imageUrl: '../public/images/desarrolloweb.png' },
      { name: 'React', url: 'https://platzi.com/@davidjvicent/curso/react/diploma/', imageUrl: '../public/images/react.png' },
      { name: 'Webpack', url: 'https://platzi.com/@davidjvicent/curso/webpack/diploma/', imageUrl: '../public/images/webpack.png' },
      { name: 'Programación Basica', url: 'https://platzi.com/@davidjvicent/curso/programacion-basica/diploma/', imageUrl: '../public/images/programacionbasica.png' },
      { name: 'Git & Github', url: 'https://platzi.com/@davidjvicent/curso/git-github/diploma/', imageUrl: '../public/images/git.png' },
      { name: 'PHP', url: 'https://platzi.com/@davidjvicent/curso/php/diploma/', imageUrl: '../public/images/php.png' },
    ]
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <DvCard description={this.state.description} certificados={this.state.certificados}/>
        </div>
      </div>
    );
  }
}

export default App;
