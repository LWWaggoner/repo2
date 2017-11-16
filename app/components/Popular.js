var React = require('react');
var PropTypes = require('prop-types');
var Sign = require('./Sign');

//will need to update this for the BIDMC APIs 
var api = require('../utils/api');


// Creates the component that is the meat of the page with checkboxes that can be checked or unchecked. May need to be switched from a function to a formal component since it will have state.
// want props to be an array of order type and orders 

function OrderGrid (props) {
  return (
    <ul className='ordertypelist'>
      {props.ordinfo.map(function (ordernm, index) {
        return (
          <li key={ordernm.name} className='ordertypeitem'>
            <form> 
                <input type='checkbox' value={index + 1} />
                <label> {index} </label>
            </form>
              </li>
        )
      })}
    </ul>
  )
}
OrderGrid.propTypes = {
  ordinfo: PropTypes.array.isRequired,
}

//This is wher stuff is signed
class Sidebar extends React.Component {
    render() {return (
    <div className='sidebarcontain'>
        <h4>New Orders</h4>
        <div>
            <form className="signbtn">
                <input type="submit" name="Sign" />
            </form>
        </div>
    </div>
   )
 }
}




// constructor for the header to decide what is selected by default
class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedLanguage: 'All',
      ordinfo: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

    componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

    updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        ordinfo: null
      }
    });

        
//go get the order data -- Need to get BIDMC APIs
    api.fetchPopularRepos(lang)
      .then(function (ordinfo) {
        this.setState(function () {
          return {
            ordinfo: ordinfo
          }
        });
      }.bind(this));
  }
    
// Render the components    
  render() {
    return (
        <div className='splitter'>
        {!this.state.ordinfo
          ? <p>LOADING!</p>
          : <OrderGrid ordinfo={this.state.ordinfo} />}
        <Sidebar />
        </div>
    )
  }
}

module.exports = Popular;