import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import data from './data'
import Menu from './Menu'


window.React = React

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
  )
})


// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
//
// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )
//
// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: PropTypes.string
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
//
// export default post
