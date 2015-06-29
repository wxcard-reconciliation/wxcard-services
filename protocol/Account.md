# Account

账户接口

## login
### 请求 
#### POST /accounts/login?include=user
```json
{"email": "gbo@example.com", "password": "123456"}
```
#### Querystring
- `include` 
 - `user` 返回中包含用户的详细信息。 
	
### 响应

#### 200 OK

```json
{
  "id": "rYmARDH0TZ2g7VcXxkspt8uwwMhT8TCtP6kWbrm3xsZZb31cnQYZRlHRRTEkW0aP",
  "ttl": 1209600,
  "created": "2015-06-29T05:08:35.964Z",
  "userId": 123457,
  "user": {
    "companyId": null,
    "job": "系统管理员",
    "name": "管博",
    "phone": "13357828347",
    "picture": null,
    "realm": null,
    "username": null,
    "credentials": null,
    "challenges": null,
    "email": "gbo@example.com",
    "emailVerified": null,
    "verificationToken": null,
    "status": "active",
    "created": "2015-06-06T08:50:58.000Z",
    "lastUpdated": "2015-06-06T09:28:03.000Z",
    "id": 123457
  }
}
```

## logout
### 请求 
#### POST /accounts/logout?accessToken= rYmARDH0TZ2g7VcXxkspt8uwwMhT8TCtP6kWbrm3xsZZb31cnQYZRlHRRTEkW0aP

#### Querystring
* `accessToken` 访问令牌，从`login`返回中的获得地id:`rYmARDH0TZ2g7VcXxkspt8uwwMhT8TCtP6kWbrm3xsZZb31cnQYZRlHRRTEkW0aP`；服务器根据令牌识别用户身份，更新账户状态。

#### HTTP Request Header
* `authorization` 用户认证域；将`login`获得的id：`rYmARDH0TZ2g7VcXxkspt8uwwMhT8TCtP6kWbrm3xsZZb31cnQYZRlHRRTEkW0aP`赋予该域，用于服务器识别用户身份；其他请求也可以将这个域设置以后提交请求用户身份识别。


### 响应

#### 204 no content
