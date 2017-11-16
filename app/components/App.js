var React = require('react');
var Home = require('./home');


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Home />
      </div>
    )
  }
}

module.exports = App;