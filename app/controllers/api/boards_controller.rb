class Api::BoardsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    
    def index
        @boards = current_user.boards.where(author_id: @current_user.id)
        # @boards = Board.all
    end

    def create
        @board = Board.new(boards_params)
        @board.author_id = current_user.id

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
    #     @board = Board.find_by(id: params[:id])

    #     @board.title = params[:board][:title]
    #     @board.description = params[:board][:description]

    #     if @board.save
    #         redirect_to user_url(@board.user)
    #     else
    #         flash.now[:errors] = @board.errors.full_messages
    #         render :edit
    #     end
    # end

    # def edit
    #     @board = Board.find(params[:id])
    # end
    private

    def boards_params
    params.require(:board).permit(:title)
  end
end