
## git ssl verify error

错误描述：
```
rror: server certificate verification failed.
CAfile: /etc/ssl/certs/ca-certificates.crt CRLfile:
none while accessing http://github.com/lihebi/
```

解决办法：
```
export GIT_SSL_NO_VERIFY=1
```
