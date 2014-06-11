
## Mac

```
sudo apachectl start # start and enable start at boot
sudo touch /etc/apache2/users/hebi.conf
sudo chown root:wheel /etc/apache2/users/hebi.conf
sudo apachectl restart # now can browse: localhost/~hebi
```

hebi.conf

```
<Directory "/Users/yourusername/Sites/">
  Options Indexes MultiViews
  AllowOverride None
  Order allow,deny
  Allow from all
</Directory>
```

#### enable php for apache
in httpd.conf, uncomment the line for include php lib, than restart

index.php

```
<?php echo phpinfo() ?>
```

#### xampp
好吧，我承认这个真的很方便。
使用dmg安装，不会和原来的冲突，所有文件，应用，配置，站点全都放在/Application/XAMPP中。
默认已经开启了php支持。在etc中有httpd的配置文件和php.ini。

安装mongo支持：

```
sudo /Applications/XAMPP/xamppfiles/bin/pecl install mongo
```

会把mongo.so装在

`/Applications/XAMPP/xamppfiles/lib/php/extensions/no-debug-non-zts-20121212/`

中，要编辑

`/Applications/XAMPP/xamppfiles/etc/php.ini`:

```
extension=mongo.so
```

默认localhost访问点是

`/Applications/XAMPP/xamppfiles/htdocs`

#### 安装mongodb
下载tgz包，解压，放到`~/Applications/mongodb`或任何一个地方。在里面根目录新建一个mongod.conf:

```
# default port: 27017
port=27017

# default is false
verbose=true

# limit max connection, cant set more than 20000
# maxConns=50

logpath=/var/log/mongodb.log
logappend=true

# default is /data/db
dbpath=/var/lib/mongodb
#auth=true
```

添加一个launchdaemon。

`/Library/LaunchDaemons/org.mongo.mongod.plist`:

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>org.mongodb.mongod</string> <!-- the label -->
    <key>RunAtLoad</key>
    <true/>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/hebi/Applications/mongodb/bin/mongod</string>
        <string>run</string> <!-- important -->
        <string>--config</string>
        <string>/Users/hebi/Applications/mongodb/mongod.conf</string>
    </array>
</dict>
</plist>
```

shell:

```
  sudo touch /var/log/mongodb.log
  sudo mkdir /var/lib/mongodb
  sudo chown root:wheel /Library/LaunchDaemons/org.mongodb.mongod.plist
  sudo launchctl load /Library/LaunchDaemons/org.mongodb.mongod.plist
  sudo launchctl start org.mongodb.mongod

  ps -eaf | grep mongod
```
