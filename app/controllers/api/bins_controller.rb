class Api::BinsController < ApplicationController
  wrap_parameters include: Bin.attribute_names + [:photo]
  before_action :require_logged_in, only: [:create, :destroy, :index, :show, :update, :edit]

  def show
    @bin = Bin.find(params[:id])
    render :show
  end

  # aws index
  def index
    @bins = Bin.all.sort { |a,b| b.created_at <=> a.created_at }
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
    @bin = Bin.find(params[:id])
    
    if @bin.author_id == current_user.id # Verify that the current user is the author of the bin
      if @bin.update(bins_params)
        render :show
      else
        render json: @bin.errors.full_messages
      end
    else
      render json: ["You are not authorized to update this bin"], status: 403 # Return a 403 Forbidden status if the current user is not the author of the bin
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
