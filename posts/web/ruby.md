---

layout: hebi-post
title: Ruby
location: 合肥
time: 14:14:32
categories: 语言
---

## RVM

```
curl -L https://get.rvm.io | bash -s stable --autolibs=enabled —ruby —rails

# make sure dvm is up-to-date
rvm get head

# install a version of ruby
rvm install ruby-1.9.3-p125
# the same as
dvm install 1.9.3 # dvm will fetch the latest patched version

rvm list
# use
rvm use ruby-1.9.3-p125
# the same as
rvm 1.9.3
# make 1.9.3 your default
rvm 1.9.3 —default
```
