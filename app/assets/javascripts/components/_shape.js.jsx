const Shape = React.createClass({
  getInitialState() {
    return {editable:false}
  },

  handleDelete (id) {
    this.props.delete(id)
  },

  handleEdit () {
    if (this.state.editable) {
      const name = this.refs.name.value
      const id = this.props.shape.id
      const color = this.refs.color.value
      const shape = {id: id, name: name, color: color}
      this.props.edit(shape)
    }
    
    this.setState({editable: !this.state.editable})

  },

  render () {
    const { shape } = this.props
    let name = this.state.editable ? <input type='text' ref='name' defaultValue={shape.name} /> : <h3>{shape.name}</h3>
    let color = this.state.editable ? <input type='text' ref='color' defaultValue={shape.color} /> : <p>{shape.color}</p>;
    let date = moment(shape.created_at).format('YYYY MM DD')
    let update = moment(shape.updated_at).format("dddd, MMMM Do YYYY, h:mm:ss a")
    return <div>
        {name}
        {color}
        <p>Created On: {date}</p>
        <p>Last Updated: {update}</p>
        <button onClick={this.handleDelete.bind(this, shape.id)}>DELETE SHAPE</button>
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
      </div>
  }
})
