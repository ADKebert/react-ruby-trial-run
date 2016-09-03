var AllShapes = React.createClass({
  getInitialState() {
    return { shapes: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/shapes.json', (response) => { this.setState({ shapes: response }) })
  },

  render() {
    const allShapes = this.state.shapes.map((shape, i) => {
      return <li key={i}>{shape.name}</li>
    })
     return <ul>{allShapes}</ul>
  }
})
