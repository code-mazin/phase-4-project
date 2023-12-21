class MembersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Member.all
    end

    def show
        member = find_member
        render json: member, serializer: MemberWithGamesSerializer
    end

    def create
        member = Member.create!(member_params)
        render json: member, status: :created
    end

    def destroy
        member = find_member
        member.destroy
        head :no_content
    end
        

    private

    def member_params
        params.permit(:name, :age)
    end

    def find_member
        Member.find(params[:id])
    end

    def render_not_found_response
        render json: { error: "Member not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(exceprion)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
