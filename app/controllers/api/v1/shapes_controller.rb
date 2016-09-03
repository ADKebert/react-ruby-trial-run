class Api::V1::ShapesController < Api::V1::BaseController
  def index
    respond_with Shape.all
  end

  def create
    respond_with :api, :v1, Shape.create(shape_params)
  end

  def destroy
    respond_with Shape.destroy(params[:id])
  end

  def update
    shape = Shape.find(params["id"])
    shape.update(shape_params)
    respond_with shape, json: shape
  end

  private

  def shape_params
    params.require(:shape).permit(:id, :name, :color)
  end
end
