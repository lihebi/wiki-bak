

# 安装

```
gem install jekyll
jekyll new mysite
jekyll new .
```

# 语法

## Liquid template

`posts.size` 获得数组长度

# 脚本代码片段

## new post

```
#!/bin/bash

read -p "Post title: " -e TITLE
#DTITLE=`echo -n $TITLE | sed 's/ /-/g' | sed 's/[^A-Za-z0-9-]//g' | tr "[:upper:]" "[:lower:]"`
DTITLE=`echo -n $TITLE | sed 's/ /-/g' | tr "[:upper:]" "[:lower:]"`
DATE=`date +%Y-%m-%d`
TIME=`date +%H:%M:%S`
#FILENAME=_drafts/$DATE-$DTITLE.md
FILENAME=_posts/$DATE-$DTITLE.md

if [ -f $FILENAME ]; then
  echo "Editing \"" $TITLE "\""
else
  echo -n "Location: "
  read -e LOC
  echo "---" > $FILENAME
  echo "" >> $FILENAME
  echo "layout: hebi-post" >> $FILENAME
  echo "title:" $TITLE >> $FILENAME
  echo "location:" $LOC >> $FILENAME
  echo "time:" $TIME >> $FILENAME
  echo "" >> $FILENAME
  echo "---" >> $FILENAME
fi
```

## makefile

```
#J=bundle exec jekyll
J=jekyll

all: site

site: clean
  $J build #--lsi
  chmod -R a+rx ./_site/

clean:
  rm -rf _site/

local:
  $J serve --port=4567 --watch --drafts

new:
  ./new_post.sh
```
