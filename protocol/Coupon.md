# Coupon
卡卷接口

## cancel
核销卡卷
### 请求
#### POST /coupons/cancel
```json
{
  "code": "12312313"
}
```

### 响应

200 OK

```json
{"card_id":"pFS7Fjg8kV1IdDz01r4SQwMkuCKc"}
```

## code
卡卷的核销码查询
### 请求
#### GET /coupons/code?filter[where][code]=110201201245&filter[include]=coupon
#### Querystring
* `where`
	* `code` 核销码编号，通常从扫描中获得。 
* `include`
	* `coupon` 包含卡卷的信息。

### 响应

#### 200 OK
```json
{
	"openid":"oFS7Fjl0WsZ9AMZqrI80nbIq8xrA",
  	"coupon": {
  		"brand_name": "南京市总统府一号油站",
    	"color": "Color010",
    	"company_id": 4,
    	"create_time": 1433950773,
    	"enddate": 1436457600,
    	"gift_name": "",
    	"id": "pFS7Fjg8kV1IdDz01r4SQwMkuCKc",
    	"info": "满额即送，出示即可！",
    	"integral": 0,
    	"is_check": 1,
    	"is_delete": 0,
    	"is_weixin": 1,
    	"least_cost": 600,
    	"logourl": "http://www.beewx.com/uploads/i/ipgmlz1433818755/9/1/f/1/thumb_557853ebb0ab0.png",
    	"people": 1,
    	"reduce_cost": 100,
    	"statdate": 1433865600,
    	"title": "100元，为爱车加油！",
    	"total": 94,
    	"type": 0
  	}
}
```

* `statdate` 有效起始时间。
* `enddate`	有效截至时间。
* `least_cost`	有效启用的消费金额，例如满200使用。
* `company_id`	为空或者与登录用户的companyId一致，通过校验。
