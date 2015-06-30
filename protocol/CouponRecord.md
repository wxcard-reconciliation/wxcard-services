# CouponRecord
卡卷核销记录

## find
获取当前用户的核销的历史记录

### 请求
#### GET /couponRecords?filter[include]=coupon&filter[include]=wxuser&filter[include]=company&filter[where][cancel_code]=110201201245
#### Querystring
* `include`
	* `coupon` 卡卷信息
	* `wxuser` 消费者微信信息
	* `company` 加油站信息
*	`where`
	*	`cancel_code`	核销码编号，通常从扫描中获得。

### 返回

#### 200 OK

```json
[
  {
    "add_time": "1435244510",
    "cancel_code": "952368962448",
    "card_id": "p2sNkuPxb3PR_vZGJGb32lipWtHI",
    "company_id": 4,
    "is_use": 0,
    "staff_id": 0,
    "use_time": "",
    "wecha_id": "o2sNkuH9b_Q6E3ABpBKvHUUQiktI",
    "id": 24,
    "coupon": {
      "brand_name": "南京市江宁加油站",
      "color": "Color081",
      "company_id": 4,
      "create_time": 1433957909,
      "enddate": 1436544000,
      "gift_name": "",
      "id": "p2sNkuPxb3PR_vZGJGb32lipWtHI",
      "info": "向收银员展示二维码，即享9折优惠！",
      "integral": 0,
      "is_check": 1,
      "is_delete": 0,
      "is_weixin": 1,
      "least_cost": 0,
      "logourl": "http://www.beewx.com/uploads/i/ipgmlz1433818755/9/1/f/1/thumb_557853ebb0ab0.png",
      "people": 3,
      "reduce_cost": 0,
      "statdate": 1433952000,
      "title": "九折加油，赚大啦",
      "total": 75,
      "type": 1
    }
  }
]
```

* `statdate` 有效起始时间。
* `enddate`	有效截至时间。
* `least_cost`	有效启用的消费金额，例如满200使用。
* `company_id`	为空或者与登录用户的companyId一致，通过校验。
