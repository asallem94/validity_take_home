class User < ApplicationRecord
    def self.duplicates
        h1 = {}
        h2 = {}
        h3 = {}
        dup_hsh = {}
        answer = []
        self.all.each do |a|
            if h1[a.first_name.soundex] && h2[a.last_name.soundex] && h3[a.email.soundex]
                dup_hsh[a.email.soundex] = a

            else
                h1[a.first_name.soundex] = a.id
                h2[a.last_name.soundex] = a.id
                h3[a.email.soundex] = a.id
            end
        end
        self.all.each do |a|
            if dup_hsh[a.first_name.soundex] || dup_hsh[a.last_name.soundex] || dup_hsh[a.email.soundex]
                answer.push(a)
            end
        end
        answer
    end

    def self.duplicates_check
        user_ids = User.select(:user_id).order(:user_id).group(:user_id).having("Count(*)>1")
        User.where(user_id: user_ids)
    end
end