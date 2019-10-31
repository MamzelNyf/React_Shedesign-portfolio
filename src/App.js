import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    titel: 'Fanny Lefert',
    headerLinks: [
      {title: 'Home', path: '/' },
      {title: 'About', path: '/about' },
      {title: 'Contact', path: '/contact' },
    ],
    home: {
      title: 'Creating website is fun. That\'s a fact.',
      subTitle: 'Where Design & Code meet',
      text: 'Check out my projects below'
    },
    about: {
      title: 'About',
    },
    contact: {
      title: 'Let\'s talk',
    }
  }
}

  render(){
    return (
      <div>Hello from React</div>
    );
  }
}

export default App;
