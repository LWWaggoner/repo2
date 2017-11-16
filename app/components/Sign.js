var React = require('react');
var PropTypes = require('prop-types');


class Sign extends React.Component {
    render() {return (
        <div>
            <form className="signbtn">
                <input type="submit" name="Sign" />
            </form>
        </div>
       )
 }
}

module.exports = Sign;