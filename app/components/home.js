var React = require('react');

var thing1 = {
    dict: "ewpoedlab",
    id: 18437678,
    grplab: "B",
    item: "2",
    seq: "1",
    site: {
        1: "EW",
        2: "CA",
        3: "CQ"},
    test: "LC^B^SODIUM^Sodium",
    text: "Sodium",
    tylab: "G"
};

var thing2 = {
    dict: "ewpoedlab",
    id: 21754822,
    grplab: "B",
    item: "3",
    seq: "2",
    site: {
        1: "EW",
        2: "CA",
        3: "CQ"},
    test: "LC^B^POTASSIUM^Potassium",
    text: "Potassium",
    tylab: "G"
};

var Inventory = [
    thing1, thing2]

// Orderable
//class Orderable extends React.Component {
//class Orderable extends React.Component {


// Patient
// Provider

// Order Display UI
class OrdMenu extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        ordlist: [],
        counter:0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
      const value = event.target.checked;
      var target = event.target;
      var name = event.target.name; 
      var counter=this.state.counter;
      var ordlist=this.state.ordlist;
      var test = this.dict
      console.log("what is value-?  " + event.target.value )
    
      if (value) {
          counter += 1,
          ordlist.push(name)
          // Create the ptorder as a piece of state
      };
      if (!value) {
          counter -= 1
          remove(ordlist,name)
          //destroy the ptorder from the state
        };
      
    this.setState(function () {
      return {
        counter: counter,
        ordlist: ordlist  }
    });
      
      function remove(array,element) {
          const index = array.indexOf(element);
          if (index !== -1) {array.splice(index, 1)}
      }
      
      console.log(counter)
            console.log(this.state.ordlist)
      
  }
    
  render() {
    return (
      <div className='ordmenu'>
        <div className='submenus'>
          <h3> Lab Orders </h3>
            <ul className='ordtype'>
              {Inventory.map(function (lab) {
                return(
                  <li key={lab.id}>
                    <form>
                           <input
                            name= {lab.text}
                            value = {this}
                            type="checkbox"
                            onChange={this.handleInputChange.bind(lab)} />
                            <label> {lab.text} </label>
                    </form>
                  </li>
              )}, this
            )}
        </ul>
      </div>
     </div>
    );
  }
}

// Order Shopping Cart
class Cart extends React.Component {
  
    
    handleSubmit(event) {
    event.preventDefault();
    console.log('submit fn here');
    }
    
    render() {
        return (
            <div className='sidebar'>
                <h3>New Orders</h3>
                <p> order 1</p>
                <p> order 2</p>
                <p> order 3</p>
                <form onSubmit={this.handleSubmit}>
                    <button className='button'
                        type="submit">Sign</button>
                </form>
            </div>
        )
    }
}



class Home extends React.Component {
    render() {
        return (
            <div className = 'ordcontainer'>
                <OrdMenu />
                <Cart />
            </div>
        )
    }
}

module.exports = Home;
