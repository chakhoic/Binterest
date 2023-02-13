class Api::BinsController < ActionController
    before_action :require_logged_in, only: [:create, :destroy]

    
    def index
        @bins = Bin.all
        render: index
    end

    def create
        @bin = Bin.new(bins_params)
        @bin.user_id = current_user.id

        if @bin.save
            render :show
        else
            render json: { errors: @bin.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @bin = bin.find (params[:id])

        if @bin&.delete
            @user = current_user
            redirect_to "api"

        else
            redirect_to "users"
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