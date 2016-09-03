let Body = React.createClass ({
  getInitialState() {
    return { shapes: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/shapes.json', (response) => { this.setState({ shapes: response }) })
  },

  handleSubmit (shape) {
    this.setState({
      shapes: this.state.shapes.concat(shape)
    })
  },

  handleDelete (id) {
    $.ajax({
      url:`api/v1/shapes/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeShapeClient(id)
      }
    })
  },

  removeShapeClient (id) {
    let newShapes = this.state.shapes.filter((shape) => shape.id != id)
    this.setState({ shapes: newShapes})
  },

  handleEdit () {

  },

  render () {
    return <div className="Body">
      <AllShapes edit={this.handelEdit} delete={this.handleDelete} shapes={this.state.shapes} />
      <NewShapes submit={this.handleSubmit} />
    </div>
  }
})
