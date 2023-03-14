class Api::BinsController < ApplicationController
  wrap_parameters include: Bin.attribute_names + [:photo]
  # before_action :require_logged_in, only: [:create, :destroy, :index, :show]

  def show
    @bin = Bin.find(params[:id])
  end

  # aws index
  def index
    @bins = Bin.all
    # render json: @bins
    render "index"
  end

  def create
    bin = Bin.new(bins_params)
    if bin.save
      render partial: "api/bins/bin", locals: { bin: bin }
    else
      render json: bin.errors.full_messages, status: 422
    end
  end

  #     take away author_id
  #     def create
  #   bin = Bin.new(bins_params)
  #   bin.author_id = current_user.id
  #   if bin.save
  #     render partial: "api/bins/bin", locals: { bin: bin }
  #   else
  #     render json: bin.errors.full_messages, status: 422
  #   end
  # end

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
    @bin.description = params[:bin][:description]

    if @bin.save
      redirect_to user_url(@bin.user)
    else
      flash.now[:errors] = @bin.errors.full_messages
      render :edit
    end
  end

  def edit
    @bin = Bin.find(params[:id])
  end

  private

  def bins_params
    params.require(:bin).permit(:title, :body, :photo, :author_id)
  end
end
