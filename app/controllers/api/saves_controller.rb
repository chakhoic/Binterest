class Api::SavesController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]
  

  
    def create
      @save = Save.new(bin_id: params[:bin_id] , board_id: params[:board_id])
      if @save.save
        render json: ["Saved"]
      else
        render json: @save.errors.full_messages, status: 422
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
  