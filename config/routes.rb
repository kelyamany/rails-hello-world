Rails.application.routes.draw do
  root to: 'home#index'
  resources :projects, only: [:index, :create, :destroy, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
