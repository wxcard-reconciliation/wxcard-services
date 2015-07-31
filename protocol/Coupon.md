# Coupon
卡卷接口

## cancel
核销卡卷
### 请求
#### POST /coupons/cancel
```json
{
  "code": "12312313",
  "receipt": "lsakjd12323j12123342lkljfd3.jpg"
}
```
`receipt`: `可选`, 当是代金券的启用门槛大于0的时候，需要先上传收据到OSS的Bucket：`pertrojs-receipt`，然后将Object的Key作为receipt在核销的时候上传。

### 响应

200 OK

```json
{"card_id":"pFS7Fjg8kV1IdDz01r4SQwMkuCKc"}
```
