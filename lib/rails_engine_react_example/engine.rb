module RailsEngineReactExample
  class Engine < ::Rails::Engine
    isolate_namespace RailsEngineReactExample

    config.generators do |g|
      g.javascripts false
      g.stylesheets false
      g.helper false
    end
  end
end
