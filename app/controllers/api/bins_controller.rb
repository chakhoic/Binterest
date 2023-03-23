class Api::BinsController < ApplicationController
  wrap_parameters include: Bin.attribute_names + [:photo]
  before_action :require_logged_in, only: [:create, :destroy, :index, :show]

  def show
    @bin = Bin.find(params[:id])
  end

  # aws index
  def index
    @bins = Bin.all
    render :index
    # render json: bins

  end

  def create
    bin = Bin.new(bins_params)
    if bin.save
      render partial: "api/bins/bin", locals: { bin: bin }
    else
      render json: bin.errors.full_messages, status: 422
    end
  end


  def destroy
    @bin = Bin.find(params[:id])
  
    if @bin&.delete
      @user = current_user
      render json: ["Deleted"]
    else
      render json: ["Error"]
    end
  end
  

  def update
    @bin = Bin.find_by(id: params[:id])

    @bin.title = params[:bin][:title]
    @bin.board_id = params[:bin][:board_id]

    if @bin.update
      render :show
    else
      render json: ["Cannot Update"]
    end
  end

  def edit
    @bin = Bin.find(params[:id])
  end

  private

  def bins_params
    params.require(:bin).permit(:title, :body, :photo, :author_id, :board_id)
  end
end
