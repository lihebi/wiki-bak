# 安装

```
npm install -g yo
npm install -g generator-webapp
```

# 使用

```
cd myapp
yo webapp
```


for angularjs app:

```
npm install -g generator-angular
yo angular
```

# Workflow

```
yo webapp
grunt serve
grunt test
grunt
```

# Use bower with yeoman 官方的工作流

```
# Scaffold a new application.
yo webapp

# Search Bower's registry for the plug-in we want.
bower search jquery-pjax

# Install it and save it to bower.json
bower install jquery-pjax --save

# If you're using RequireJS...
# (be aware that currently the webapp generator does not include RequireJS and the following command only applies to generators that do)
grunt bower
> Injects your Bower dependencies into your RequireJS configuration.

# If you're not using RequireJS...
grunt bowerInstall
> Injects your dependencies into your index.html file.
```
