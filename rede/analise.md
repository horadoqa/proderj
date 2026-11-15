# Teste de Rede

https://www.rj.gov.br/proderj


curl -I https://www.rj.gov.br/proderj/
curl: (35) TLS connect error: error:0A000126:SSL routines::unexpected eof while reading


curl -Iv https://www.rj.gov.br/proderj/
* Host www.rj.gov.br:443 was resolved.
* IPv6: (none)
* IPv4: 187.62.128.44
*   Trying 187.62.128.44:443...
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* SSL Trust Anchors:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
*   CApath: /etc/ssl/certs
* TLSv1.3 (OUT), TLS alert, decode error (562):
* TLS connect error: error:0A000126:SSL routines::unexpected eof while reading
* closing connection #0
curl: (35) TLS connect error: error:0A000126:SSL routines::unexpected eof while reading


curl -v --http1.1 https://www.rj.gov.br/proderj/ -o /dev/null
  % Total    % Received % Xferd  Average Speed  Time    Time    Time   Current
                                 Dload  Upload  Total   Spent   Left   Speed
  0      0   0      0   0      0      0      0                              0* Host www.rj.gov.br:443 was resolved.
* IPv6: (none)
* IPv4: 187.62.128.44
*   Trying 187.62.128.44:443...
* ALPN: curl offers http/1.1
} [5 bytes data]
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
} [1565 bytes data]
* SSL Trust Anchors:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
*   CApath: /etc/ssl/certs
{ [5 bytes data]
* TLSv1.3 (IN), TLS handshake, Server hello (2):
{ [80 bytes data]
* TLSv1.2 (IN), TLS handshake, Certificate (11):
{ [3713 bytes data]
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
{ [300 bytes data]
* TLSv1.2 (IN), TLS handshake, Server finished (14):
{ [4 bytes data]
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
} [37 bytes data]
* TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
} [1 bytes data]
* TLSv1.2 (OUT), TLS handshake, Finished (20):
} [16 bytes data]
* TLSv1.2 (OUT), TLS alert, decode error (562):
} [2 bytes data]
* TLS connect error: error:0A000126:SSL routines::unexpected eof while reading

* closing connection #0
curl: (35) TLS connect error: error:0A000126:SSL routines::unexpected eof while reading


--- 

curl -v --tlsv1.2 --tls-max 1.2 https://www.rj.gov.br/proderj/ -o /dev/null 
  % Total    % Received % Xferd  Average Speed  Time    Time    Time   Current
                                 Dload  Upload  Total   Spent   Left   Speed
  0      0   0      0   0      0      0      0                              0* Host www.rj.gov.br:443 was resolved.
* IPv6: (none)
* IPv4: 187.62.128.44
*   Trying 187.62.128.44:443...
* ALPN: curl offers h2,http/1.1
} [5 bytes data]
* TLSv1.2 (OUT), TLS handshake, Client hello (1):
} [222 bytes data]
* SSL Trust Anchors:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
*   CApath: /etc/ssl/certs
{ [5 bytes data]
* TLSv1.2 (IN), TLS handshake, Server hello (2):
{ [80 bytes data]
* TLSv1.2 (IN), TLS handshake, Certificate (11):
{ [3713 bytes data]
* TLSv1.2 (IN), TLS handshake, Server key exchange (12):
{ [300 bytes data]
* TLSv1.2 (IN), TLS handshake, Server finished (14):
{ [4 bytes data]
* TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
} [37 bytes data]
* TLSv1.2 (OUT), TLS change cipher, Change cipher spec (1):
} [1 bytes data]
* TLSv1.2 (OUT), TLS handshake, Finished (20):
} [16 bytes data]
* TLSv1.2 (OUT), TLS alert, decode error (562):
} [2 bytes data]
* TLS connect error: error:0A000126:SSL routines::unexpected eof while reading

* closing connection #0
curl: (35) TLS connect error: error:0A000126:SSL routines::unexpected eof while reading


--- 


Teste diretamente o handshake TLS com OpenSSL

openssl s_client \
-connect www.rj.gov.br:443 \
-servername www.rj.gov.br \
-showcerts \
-brief

Connecting to 187.62.128.44
403744F3CC740000:error:0A000126:SSL routines::unexpected eof while reading:../ssl/record/rec_layer_s3.c:698:


---

Verificar DNS e conectividade
Execute:


```bash
nslookup www.rj.gov.br
```

---
curl -4 -Iv https://www.rj.gov.br/proderj/
* Host www.rj.gov.br:443 was resolved.
* IPv6: (none)
* IPv4: 187.62.128.44
*   Trying 187.62.128.44:443...
* ALPN: curl offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* SSL Trust Anchors:
*   CAfile: /etc/ssl/certs/ca-certificates.crt
*   CApath: /etc/ssl/certs
* Send failure: Broken pipe
* TLSv1.3 (OUT), TLS alert, decode error (562):
* TLS connect error: error:0A000126:SSL routines::unexpected eof while reading
* closing connection #0
curl: (35) Send failure: Broken pipe


---

traceroute www.rj.gov.br