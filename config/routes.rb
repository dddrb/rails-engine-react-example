RailsEngineReactExample::Engine.routes.draw do
  root 'main#index'
  get '*path', to: 'main#index'
end
