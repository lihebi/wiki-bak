---

layout: hebi-post
title: Heroku
location: 合肥
time: 14:15:23
categories: 云
---

## heroku create php app

```
heroku login
mkdir php
cd php
touch index.php
touch composer.json

git init
git add .
git commit -m ‘first’

heroku create # have a random name
heroku create byname # custom name

git push heroku master

heroku open
```

<!--more-->

## Trouble Shooting

#### Heroku 'Permission denied (publickey) fatal: Could not read from remote repository'

```
ssh-keygen -t rsa
heroku keys:add
```

or just

```
ssh-add ~/.ssh/id_rsa
#and, to confirm it's been added to the known list of keys
ssh-add -l
```
