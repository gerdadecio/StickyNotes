ActionController::Routing::Routes.draw do |map|
  
  map.resources :notes, :collection => {:update_all => [:put]}
  
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
  map.root :controller => "notes", :action => "index"
end