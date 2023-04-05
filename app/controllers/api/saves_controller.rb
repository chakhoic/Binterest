class Api::SavesController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]
  
    def index
      @saved_bins = Save.all
      render :index
    end
    
  
    def create
      existing_save = Save.find_by(bin_id: params[:bin_id], board_id: params[:board_id])
    
      if existing_save
        render json: ["This bin has already been saved to this board."], status: 422
      else
        @save = Save.new(bin_id: params[:bin_id], board_id: params[:board_id])
        if @save.save
          render json: ["Saved"]
        else
          render json: @save.errors.full_messages, status: 422
        end
      end
    end
    
  
    def destroy
      @save = Save.find(params[:bin_id])
    
      if @save&.delete
        render json: ["Deleted"]
      else
        render json: ["Error"]
      end
    end
    
    # private
  
    # def saved_params
    #   params.require(:save).permit(:bin_id, :board_id)
    # end
  end
  