
# 服务端

环境：ubuntu14.04

## install packages

    apt-get update
    apt-get upgrade
    apt-get install openvpn
    apt-get install easy-rsa

## easy-rsa

    cp -r /usr/share/easy-rsa /etc/openvpn/
    cd /etc/openvpn/easy-rsa
    ln -s openssl-1.0.0.cnf openssl.conf
    # config here
    . vars
    # this will rm keys dir
    . clean-all
    . build-ca

    # need 'y'
    . build-key-server server
    # need 'y'
    . build-key client1 # one user a time
    # 2048 if 64 bit
    . build-dh

    # optional: revoke user
    . vars
    . revoke-full client1

## key files

Client Side files: `ca.crt`, `client1.crt`, `client1.key`

    cd keys
    cp ca.crt ca.key dh2048.pem server.crt server.key /etc/openvpn/

## config

    cd /usr/share/doc/openvpn/examples/sample-config-files/
    cp server.conf.gz client.conf ~
    cd ~
    gunzip server.conf.gz
    mv server.conf /etc/openvpn

client.conf:

    remote example.com 1194
    ca ca.crt
    cert client1.crt
    key client1.key

server.conf:

    dh2048.pem # if build-dh use 64bit

## start service

    service openvpn start

## forward config

/etc/openvpn/server.conf

    push "redirect-gateway def1 bypass-dhcp"

/etc/sysctl.conf

    net.ipv4.ip_forward=1

in shell:

    echo 1 > /proc/sys/net/ipv4/ip_forward

## iptables

/etc/rc.local

    iptables -A FORWARD -m state --state RELATED,ESTABLISHED -j ACCEPT
    iptables -A FORWARD -s 10.8.0.0/24 -j ACCEPT
    iptables -A FORWARD -j REJECT
    iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
    iptables -A INPUT -i tun+ -j ACCEPT
    iptables -A FORWARD -i tun+ -j ACCEPT
    iptables -A INPUT -i tap+ -j ACCEPT
    iptables -A FORWARD -i tap+ -j ACCEPT

    exit 0

## dns

    apt-get install dnsmasq resolvconf

/etc/dnsmasq.conf

    listen-address=127.0.0.1,10.8.0.1
    bind-interfaces

/etc/network/interfaces: # optional

    auto eth0
    iface eth0 inet dhcp

    dns-search members.linode.com
    dns-nameservers 97.107.133.4 207.192.69.4 207.192.69.5

/etc/rc.local

    /etc/init.d/dnsmasq start
    exit 0

/etc/openvpn/server.conf:

    push "dhcp-option DNS 10.8.0.1"

reboot!


# client side

## 文件

* client.conf
* ca.crt
* client1.key
* client1.crt

## mac
tunnelblick

## windows
use openvpn gui, stable version, installation package
(both 32-bit and 64-bit TAP driver included)
openvpn-2.0.9-gui-1.0.3-install.exe

* `/etc/openvpn/server.conf`, remove the `bypass-dhcp` in push directive
* in client.ovpn, add `route-method exe` in the end
