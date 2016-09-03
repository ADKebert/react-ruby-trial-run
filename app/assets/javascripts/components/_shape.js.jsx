const Shape = React.createClass({
  handleDelete (id) {
    this.props.delete(id)
  },

  handleEdit () {
    this.props.edit()
  },

  render () {
    const allShapes = this.props.shapes.map((shape, i) => {
    let date = moment(shape.created_at).format('YYYY MM DD')
    let update = moment(shape.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a")
    return <div key={i}>
      <p>Shape: {shape.name}</p>
      <p>Color: {shape.color}</p>
      <p>Created On: {date}</p>
      <p>Last Updated: {update}</p>
      <button onClick={this.handleDelete.bind(this, shape.id)}>DELETE SHAPE</button>
      <button onClick={this.handleEdit}>EDIT SHAPE</button>
      </div>
  })
   return <div className="AllShapes">
        {allShapes}
    </div>
  }
})
