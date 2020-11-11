server "84.16.79.157", user: "gael", roles: %w{app db web}
set :deploy_user, 'gael'
 
set :branch, "staging"
set :stage, :staging
 
set :venv_path, "/home/gael/freego/freegoenv"
SSHKit.config.command_map[:python] = "#{fetch :venv_path}/bin/python"
SSHKit.config.command_map[:pip] = "#{fetch :venv_path}/bin/pip"
