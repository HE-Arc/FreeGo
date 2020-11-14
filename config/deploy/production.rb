server "application-freego.ch", user: "gael", roles: %w{app db web}
set :deploy_user, 'gael'
 
set :branch, "production"
set :stage, :production
 
set :venv_path, "/var/www/freego/freegoenv"
SSHKit.config.command_map[:python] = "#{fetch :venv_path}/bin/python3.7"
SSHKit.config.command_map[:pip] = "#{fetch :venv_path}/bin/pip3.7"
