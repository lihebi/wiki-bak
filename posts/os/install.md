---

layout: hebi-post
title: 各种启动盘的制作
location: 淮北
time: 08:15:05
categories: 系统

---

## OSX 10.10 yosemite

这个版本的preview版无法使用`createinstallmedia`的方法。

使用`InstallESD.dmg`方法：

1. 格式化

Disk Utility，点击U盘（而不是分区），点分区。
设置为一个分区，名字，扩展日志，option选GUID。

2. 从dmg中找到InstallESD.dmg
3. 显示隐藏文件

```
defaults write com.apple.finder AppleShowAllFiles TRUE
killall Finder
```
这时候在InstallESD中出现：`BaseSystem.chunklist`, `BaseSystem.dmg`, `Packages`

4. 恢复

将U盘的分区yosemite作为目标，`BaseSystem.dmg`作为源

5. 拷贝`Packages`

将InstallESD中的`Packages`目录拷贝到U盘的`System/Installation/`下，覆盖

6. 拷贝

将InstallESD中的`BaseSystem.chunklist`和`BaseSystem.dmg`拷贝到U盘根。

7. 将文件隐藏回去

```
defaults write com.apple.finder AppleShowAllFiles FALSE
killall Finder
```

## OSX 10.9

1. 在App Store中下载系统镜像
2. 插入一个大于8g的优盘，打开disk util
3. 侧边栏选择优盘，再选erase。 将磁盘格式化为macos extended 日志式。命名为Untitled（后面用）
4. 打开终端，输入：

```
sudo /Applications/Install\ OS\ X\ Mavericks.app/Contents/Resources/createinstallmedia \
—volume /Volumes/Untitled \
—applicationpath /Applications/Install\ …Mavericks.app \
—nointeraction
```

<!--more-->

## Raspberry Pi SD card

```
diskutil umountDisk /dev/disk1
sudo dd bs=1m if=xxx.img of=/dev/rdisk1
sudo diskutil eject /dev/rdisk1
```

## 在mac中制作ubuntu启动盘

```
hdiutil convert -format UDRW -o ~/path/to/target.img ~/path/to/ubuntu.iso
diskutil list, insert usb, diskutil list => /dev/disk1
diskutil unmountDisk /dev/diskN
sudo dd if=/path/to/downloaded.img of=/dev/rdiskN bs=1m
diskutil eject /dev/diskN
```
