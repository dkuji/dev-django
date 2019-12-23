# development

## install pipenv
```
$ brew install pipenv

$ echo 'export PATH="/usr/local/opt/sqlite/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(pipenv --completion)"' >> ~/.zshrc
```

## create environment
```
$ cd <this repo path>
$ pipenv --python 3.7
$ pipenv shell
```

## install direnv
```
$ brew install direnv
$ echo 'eval "$(direnv hook zsh)"' >> ~/.zshrc
$ echo 'layout_pipenv' > .envrc && direnv allow .
```

## install yarn
```
$ brew install yarn
```

## install vue
```
$ yarn global add @vue/cli
```
