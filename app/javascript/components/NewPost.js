import React from "react"
import PropTypes from "prop-types";
class NewPost extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {name: '',
    //               description: '',
    //               date: ''};

    this.state = {
      items: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   $.getJSON('/posts.json', (response) => { this.setState({ posts: response.posts }) } )
  //   console.log(response)
  // }

  componentDidMount() {
    $.getJSON('/posts.json', (response) => { this.setState({ items: response }) })
  }

  render() {
    console.log(this.state.items.posts)
    // var posts = this.state.items.posts.map((post) => {
    //   return (
    //     <div>
    //       console.log(post.name);
    //       console.log(post.description);
    //       console.log(post.date);
    //     </div>
    //   )
    // });
    return (
      <div>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Description:
            <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Date:
            <input type="date" name="date" onChange={this.handleChange} />
          </label>
          <br/>
          <input type="submit" value="Submit"  />
        </form>
      </div>
    )
  }

  handleSubmit() {
    var name = this.state.name;
    var description = this.state.description;
    var date = this.state.date;
    $.ajax({
      url: '/posts',
      type: 'Post',
      data: {
        post: {
          name: name,
          description: description,
          date: date
        }
      },
      success: function(){
        console.log('Post created')
      }
    })
  }

  handleChange(event) {
    this.setState({
     [event.target.name]: event.target.value
    });
  }
}

export default NewPost
