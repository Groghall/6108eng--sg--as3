OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '564690526904204','21dd56fbf57583d37ff35d1b91a4bb94' 
end