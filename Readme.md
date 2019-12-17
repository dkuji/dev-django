# development
$ brew install pipenv

$ echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(pipenv --completion)"' >> ~/.zshrc

$ cd <this repo path>
$ pipenv --python 3.7
$ pipenv shell

