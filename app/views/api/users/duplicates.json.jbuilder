
    # json.set! ids, @duplicates.ids
    @duplicates.each do |user|
        json.set! user.id do
            json.extract! user, :first_name, :last_name, :company, :email, :address1, :address2, :zip, :city, :state_long, :state, :phone
        end
    end

