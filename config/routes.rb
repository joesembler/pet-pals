Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # attributes :users, only:[:index, :create]
  get '/', to: 'root#show'

  post '/login', to: "sessions#create"
  
  post '/users', to: "users#create"

  get "/me", to: "users#show"

  delete "/logout", to: "sessions#destroy"
end
