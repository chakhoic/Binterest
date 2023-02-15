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
            # @user = current_user
            # render "users/show"
            render json: ["Deleted"]
        else
            # redirect_to users_url
            render json: ["Error"]
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        @board.title = params[:title]

        if @board.save
            render :show
        else
            flash.now[:errors] = @board.errors.full_messages
        end
    end

    private

    def boards_params
    params.require(:board).permit(:title, :author_id)
  end
end