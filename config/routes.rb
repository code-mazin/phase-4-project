Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :enlists, only: :create
  resources :games, only: [:index, :destroy]
  resources :members, only: [:index, :show, :create, :destroy]
end
