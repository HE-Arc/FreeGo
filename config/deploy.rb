lock "~> 3.14.1"

set :application, "freego"
set :repo_url, "git@github.com:HE-Arc/FreeGo.git"
set :keep_releases, 10
 
append :linked_files, "freego/production_settings.py" # could be .env or any file you probably use for config variables
append :linked_dirs, "media"

set :branch, ENV['BRANCH'] if ENV['BRANCH']

set :deploy_to, "/var/www/freego"
set :ssh_options, forward_agent: true

namespace :deploy do

    desc "Run post-deploy actions (migrate and collect static)"
    task :post_deploy do
        invoke 'deploy:install_deps'
        invoke 'deploy:migrate'
        invoke 'deploy:collect_static'
        invoke 'deploy:restart'
    end

    desc "Install dependencies"
    task :install_deps do
      on roles(:app), in: :sequence, wait: 5 do
        within release_path do
          execute("source #{fetch :venv_path}/bin/activate")
          execute :pip, :install, '-r', 'requirements.txt'
        end
      end
    end

    desc "Migrate database"
    task :migrate do
      on roles(:app), in: :sequence, wait: 5 do
        within release_path do
          execute :python, 'manage.py', 'migrate', '--no-input'
        end
      end
    end

    desc "Collect static"
    task :collect_static do
        on roles(:app), in: :sequence, wait: 5 do
        within release_path do
            execute :python, 'manage.py', 'collectstatic', '--no-input'
        end
        end
    end
    
    desc "Restart Gunicorn"
    task :restart do
        on roles(:app), in: :sequence, wait: 5 do
        execute :sudo, :service, 'gunicorn', :restart
        end
    end
end