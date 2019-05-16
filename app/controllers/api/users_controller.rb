class Api::UsersController < ApplicationController

    def show
        
    end

    def duplicates
        @duplicates = User.duplicates
        @check_duplicates = User.check_duplicates
    end