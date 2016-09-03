var AllShapes = React.createClass({
  getInitialState() {
    return { shapes: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/shapes.json', (response) => { this.setState({ shapes: response }) })
  },

  render() {
    const allShapes = this.state.shapes.map((shape, i) => {
      let date = moment(shape.created_at).format('YYYY MM DD')
      return <li key={i}>{shape.name} : {shape.color} : {date}</li>
    })
     return <ul>{allShapes}</ul>
  }
})
