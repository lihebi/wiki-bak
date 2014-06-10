---

layout: hebi-post
title: Github
location: 合肥
time: 14:36:03
categories: 云
---

# 安装和配置

```
git config --global user.email 'xxx@xxx'
git config --global user.name 'xxx'
```

自定义配置

```
git config --global alias.lg \
"log --color --graph
--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
--abbrev-commit"
```

<!--more-->

# 概念

工作区: 你当前看到的目录

版本库: `.git`文件夹中的内容

暂存区: git add 后,将会放到此处,commit会放到版本库.

# 使用

## 新建

```
git add .
git commit -m 'xxx'
git remote add origin https://github.com/lihebi/xxx.git
git push -u origin master
```

### 关于`-u`的解释

使用git push -u origin master以后就可以直接使用不带别的参数的git pull从之前push到的分支来pull。

加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，
还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

所以说,第一次push的时候还是加上`-u`,以后才能用`git push origin master`用的放心.

See Also: [stackoverflow][gitpush]
[gitpush]: http://stackoverflow.com/questions/5697750/what-exactly-does-the-u-do-git-push-u-origin-master-vs-git-push-origin-ma

## 分支

### 分支创建切换删除

```
git branch # 列出所有分支
git branch xxx # 新建
git checkout [branch] # 切换
git push origin [branch]
git checkout -b [branch] # 新建并切换
git branch -d [branch] # 删除本地分支
git branch -D <branch> # 强制删除没有被merge的分支
git push origin --delete [branch] # 删除remote的分支
```

不能delete current branch.
在项目的`settings`中可以改变`default branch`
然后再
```
git push origin —delete master
```

### merge

```
#merge: in master;
git merge [branch]
git add [filename]
push ...
git diff [source-branch] [target-branch]
```

默认使用`Fast Forward`,这样merge后不会记录.使用`--no-ff`会把这次merge当做一次commit

```
git merge --no-ff -m "merge with no-ff" dev
```

### 本地分支和远程分支关联

查看远程repo情况

```
git remote
git remote -v
```

clone一个库

```
git clone http://xxx
cd xxx
git branch
# => now only master branch
git checkout -b dev origin/dev
```

如果本地dev没有关联远程dev的话

```
git branch --set-upstream dev origin/dev
```


### 图形查看分支情况

```
git log --graph
```

### 保存工作区

使用场景:当前分支需要1天才能做完.但是master上有一个bug要在2小时内修复.
当前分支不能commit.

使用stash保存当前工作.

```
git stash
```

之后`git status`就会是干净的.做完bug后,回到这个分支,将stack内容pop出来.

```
git stash list
# => stash@{0}: WIP on dev: 6224937 add merge
git stash pop
```

如果要恢复,但是stash list里不删除,可以:
```
git stash apply stash@{0}
```

## 标签

### 查看tag

```
git tag
```

查看一次tag的详细信息

```
git show <tagname>
```

### 创建tag

需要切换到需要打标签的分支,然后

```
git tag v1.0
```

这会达到最近一次commit上.

要达到特定的一个commit上,使用`commit ID`(不需要完整的ID,只需要前几位):

```
git tag v1.0 <commit ID>
```

可以打一个带有commit的标签.`-a`指定标签名,`-m`指定说明内容.

```
git tag -a v1.0 -m 'this is a tag'
```

### 操作标签

删除

```
git tag -d v1.0
```

将标签推送到远程

```
git push origin v1.0
```

将所有标签一次性推送到远程

```
git push origin --tags
```

若标签已经推送到远程,则删除:

```
git tag -d v1.0
git push origin :refs/tags/v1.0
```

## 版本回退

### 重新做commit

```
git commit --amend --reset-author # config user后重新以新user的身份进行上一次commit
```

### 丢弃某文件在当前工作区的修改

使用`HEAD`(版本库)中最新的内容替换此文件。已添加到缓存区和新文件不受影响。

```
git checkout -- [filename]
```

若已经commit到缓存区,则使用

```
git reset HEAD <filename>
```

### git rm

先删除一个文件,然后有两种做法:

1. `git rm <filename>` 将此次删除放到暂存区.然后可以commit
2. `git checkout -- <filename>` 撤销此次删除,把文件找回来.

将缓存区的文件撤销(unstage)到工作区.这时候再checkout就好.

### 丢弃本地所有的改动与提交：到服务器上获取最新版本，并将本地主分支指向它。

```
git fetch origin
git reset --hard origin/master
```

### 整个本地版本库重置

```
# 获取commit id
git log
git log --pretty=oneline --abbrev-commit
# 执行reset
git reset --hard <tag/branch/commit id> # commit ID 不必写全,写前几个字母就行了.
```
See Also: [stackoverflow][gitreset]
[gitreset]: http://stackoverflow.com/questions/1616957/how-do-you-roll-back-reset-a-git-repository-to-a-particular-commit

`git push`后，`reset —hard`再`push`会出错。提示要`git pull`

如果没有ßpush，直接reset，就会丢失reset了的东西

也可以使用相对版本.`HEAD`是当前版本.`HEAD^`是上一个版本.`HEAD^^`是上上个版本.`HEAD~100`上上100个版本.

```
git reset --hard HEAD^
```

后悔了,还是把reset之前的状态找回来把.

```
git reflog # 列出每一次命令的commit 和 id
git reset --head <commit ID>
```

## submodule

```
git submodule add xxx
git submodule init
git submodule update
```

# 搭建git服务器

## 搭建

```
sudo apt-get install git
sudo adduser git
```

收集用户的公钥(`id_rsa.pub`),导入`/home/git/.ssh/authorized_keys`,一行一个

初始化git仓库

```
cd /srv
sudo git init --bare sample.git
sudo chown -R git:git sample.git
```

在`/etc/password`中设置git用户不允许登陆shell

## 使用

```
git clone git@server:/srv/sample.git
```
