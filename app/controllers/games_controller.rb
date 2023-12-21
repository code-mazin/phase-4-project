class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: Game.all
    end

    def destroy
        game = find_game
        game.destroy
        head :no_content
    end

    private
    def find_game
        Game.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Game not found" }, status: :not_found
    end
        

    
end
