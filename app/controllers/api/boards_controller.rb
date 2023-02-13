class Api::BinsController < ActionController
    before_action :require_logged_in, only: [:create, :destroy]

    
    def index
        @boards = Bin.all
    end

    def create
        @board = Bin.new(bins_params)
        @board.user_id = current_user.id

        if @board.save
            render :show
        else
            render json: { errors: @board.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @board = current_user.boards.find_by(id: params[:id])

        if @board&.delete
            @user = current_user
            render "users/show"
        else
            redirect_to users_url
        end
    end

    # def update
    #     @bin = Bin.find_by(id: params[:id])

    #     @bin.title = params[:bin][:title]
    #     @bin.description = params[:bin][:description]

    #     if @bin.save
    #         redirect_to user_url(@bin.user)
    #     else
    #         flash.now[:errors] = @bin.errors.full_messages
    #         render :edit
    #     end
    # end

    # def edit
    #     @bin = Bin.find(params[:id])
    # end
    private

    def boards_params
    params.require(:board).permit(:title, :photo)
  end
end