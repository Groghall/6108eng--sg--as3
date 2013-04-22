Welcome::Application.routes.draw do
  match 'auth/:provider/callback', to: 'sessions#create'
  match 'auth/failure', to: redirect('/')
  match 'signout', to: 'sessions#destroy', as: 'signout'
  
  resources :events

  root :to => 'welcome#index'

  match 'index' => 'welcome#index'
  match 'about' => 'welcome#about'
  match 'contact' => 'welcome#contact'
  match 'team' => 'welcome#team'
  match 'sessions' => 'welcome#sessions'
  match 'faq' => 'welcome#faq'
  match 'events' =>'events#index'
  match 'gallery' => 'welcome#gallery'
  match 'search' => 'welcome#search'
  
end
