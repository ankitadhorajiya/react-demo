import React from "react"
import PropTypes from "prop-types";
import Header from "./Header";
import GreetUser from "./GreetUser";
import HelloWorld from "./HelloWorld";
import NewPost from "./NewPost";
class Main extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      items: [
        "1 lb Salmon",
        "1 cup Pine Nuts",
        "2 cups Butter Lettuce",
        "1 Yellow Squash",
        "1/2 cup Olive Oil",
        "3 cloves of Garlic"
      ]
    };

  }
  render() {
    // return (
    //   <div>
    //     <Header />
    //     <GreetUser />
    //     <HelloWorld greeting="called form helloworld"/>
    //     <NewPost/>
    //   </div>
    // )
    return React.createElement(
      'ul',
      { className: 'itemlist'},
      this.state.items.map(this.renderListItem)
    )
  }

  renderListItem(item, i) {
    return React.createElement('li', { key: i}, item)
  }


}


export default Main