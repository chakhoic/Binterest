class Api::BinsController < ApplicationController
    wrap_parameters include: Bin.attribute_names + [:photo]
    before_action :require_logged_in, only: [:create, :destroy]

    def show
        @bin = Bin.find(params[:id])
    end
    
    # aws index
    def index
        @bins = Bin.all.sort { |a,b| b.created_at <=> a.created_at }
        render :index
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
        @bin = bin.find (params[:id])

        if @bin&.delete
            @user = current_user
            # redirect_to "api"
            render json:["Deleted"]

        else
            # redirect_to "users"
            render json:["Error"]
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
    params.require(:bin).permit(:title, :body, :photo)
  end
end