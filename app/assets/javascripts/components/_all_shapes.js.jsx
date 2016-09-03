var AllShapes = React.createClass({

  render() {
    return <Shape edit={this.props.edit} delete={this.props.delete} shapes={this.props.shapes} />
  }
})
