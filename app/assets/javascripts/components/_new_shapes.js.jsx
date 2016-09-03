let NewShapes = React.createClass({

  handleClick () {
    const name = this.refs.name.value
    const color = this.refs.color.value
    $.ajax({
      url: 'api/v1/shapes',
      type: 'POST',
      data: { shape: { name: name, color: color } },
      success: (response) => {
        this.props.submit(response)
      }
    })
  },

  render () {
    return <div className="NewShapes">
      <h3>Please Enter a New Shape into the Database!</h3>
        <input ref='name' placeholder='Enter the name of a shape' />
        <br />
        <br />
        <input ref='color' placeholder='Please enter a color' />
        <br />
        <button onClick={this.handleClick}>Submit</button>
    </div>
  }
})
