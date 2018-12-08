import React from "react"
import PropTypes from "prop-types"
import HelloWorld from "./HelloWorld";
class GreetUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    $.getJSON('/api/v1/users.json', (response) => { this.setState({ items: response }) } )
  }

  render ()
  {
    var items= this.state.items.map((item) => {
      return (
        <div>
          <h3>{item.email}</h3>
        </div>
      )
    });

    return (
      <div>
        <h1> Hello, {this.props.name}</h1>
        {items}
      </div>
    );
  }
}

GreetUser.propTypes = {
  name: PropTypes.string
};
export default GreetUser
