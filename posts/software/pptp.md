# 服务器

## Install pptpd

```sh
apt-get install pptpd
```

## local & remote IP
`/etc/pptpd.conf`

```
localip 10.0.0.1
remoteip 10.0.0.100-200
```

## users
` /etc/ppp/chap-secrets`

```
hebi pptpd faigelnaelge *
lynn pptpd afiejglsnfae *
```

## Add dns server
`/etc/ppp/pptpd-options`

```
ms-dns 8.8.8.8
ms-dns 8.8.4.4
```

## start pptpd

```
service pptpd restart
```

verify if it is running:

```
netstat -alpn | grep :1732
```

## setup forwarding
`/etc/sysctl.conf`

```
net.ipv4.ip_forward = 1
```

make change active:

```
sysctl -p
```

## iptables

in `/etc/rc.local`

```
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

注意要把openvpn的所有设置都去掉，只在此文件中保留这一句和`exit 0`。

重启生效。

# 客户端设置

## Mac
网络设置中，添加一个vpn，类型选`PPTP`，服务器地址，账号照常。在鉴定设置中设置密码。
在高级中，选`通过vpn发送所有流量`

## windows
打开网络设置，添加新网络到工作区，vpn，xxx.
