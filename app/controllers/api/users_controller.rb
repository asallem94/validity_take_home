class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
    end

    def duplicates
        @duplicates = User.duplicates
        # .ids.sort
        @duplicates_check = User.duplicates_check
        # .ids.sort
        @answer = @duplicates == @duplicates_check 
        debugger
    end
end