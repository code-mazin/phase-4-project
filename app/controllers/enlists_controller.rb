class EnlistsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with :render_unprocessable_entity_response

    def create
        enlist = Enlist.create!(enlist_params)
        render json: enlist.activity, status: :created
    end

    private

    def enlist_params
        params.permit(:member_id, :game_id)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
