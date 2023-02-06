class User < ApplicationRecord
has_secure_password
validates :username, uniqueness: true, length: { in: 3..20 }
validates :email, uniqueness: true, length: { in: 3..20 }
validates :session_token, presence: true, uniqueness: true
validates :password, length: { minimum: 6, allow_nil: true }

before_validation :ensure_session_token

def ensure_session_token
        self.session_token ||= generate_unique_session_token
end

def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
end

def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
end

private

def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
end

end