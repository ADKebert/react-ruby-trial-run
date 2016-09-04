const AllShapes = React.createClass({
  render() {
    const shapes = this.props.shapes.map((shape) => {
      return <div key={shape.id} className="shapes">
          <Shape shape={shape}
                delete={this.props.delete}
                edit={this.props.edit} />
        </div>
      })
      return <div className="Shapes">
          {shapes}
        </div>
    }
})
