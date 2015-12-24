$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rails_engine_react_example/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rails_engine_react_example"
  s.version     = RailsEngineReactExample::VERSION
  s.authors     = ["ogom"]
  s.email       = ["ogom@outlook.com"]
  s.homepage    = "https://github.com/dddrb/rails-engine-react-example"
  s.summary     = "Summary of RailsEngineReactExample."
  s.description = "Description of RailsEngineReactExample."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.5"

  s.add_development_dependency "sqlite3"
end
