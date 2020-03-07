Rails.application.routes.draw do
  root to: 'home#index'
  get 'projects/index'
  get 'projects/show'
  get 'projects/new'
  get 'projects/create'
  get 'projects/edit'
  get 'projects/update'
  get 'projects/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
