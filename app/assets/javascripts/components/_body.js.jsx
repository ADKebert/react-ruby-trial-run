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
    this.setState({ shapes: newShapes })
  },

  handleEdit(shape) {
    $.ajax({
      url: `/api/v1/shapes/${shape.id}`,
      type: 'PUT',
      data: { shape: shape },
      success: () => {
        this.updateShapes(shape)
      }
    })
  },

  updateShapes(shape) {
    let shapes = this.state.shapes.filter((s) => {return s.id != shape.id})
    shapes.push(shape)
    this.setState({shapes: shapes})
  },

  render () {
    return <div className="Body">
      <AllShapes edit={this.handleEdit} delete={this.handleDelete} shapes={this.state.shapes} />
      <NewShapes submit={this.handleSubmit} />
    </div>
  }
})
