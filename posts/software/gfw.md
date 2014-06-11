

## ssh for forward used by safe browser

1. `AllowTcpForwarding` in `/etc/ssh/sshd_config`, set to `true`( default is true)

2. restart ssh

3. ssh

```
ssh -D 12345 user@host.domain
```

4. use `socks`, `127.0.0.1`, `12345` in chrome
