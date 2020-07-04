let baseUrl = "http://localhost/NSS";

define(['jquery', 'cookie'], function($, cookie) {
    return {
        render: function(callback) {
            let id = location.search.split("=")[1];

            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/pargetall.php`,
                data: {
                    id: id
                },
                dataType: "json",
                success: function(res) {
                    console.log(res)

                    console.log(res.pic)
                    let temp = `
                    <div class="left-s">
                    <div>
                        <img src="..${res.pic}" alt="">

                    </div>
                    <ul class="lanya">
                        <li> <img src="..${res.minpic[0]}" alt=""></li>
                        <li>
                            <img src="..${res.minpic[1]}" alt=""></li>
                        <li> <img src="..${res.minpic[2]}" alt=""></li>
                        <li> <img src="..${res.minpic[3]}" alt=""></li>
                        <li><img src="..${res.minpic[4]}" alt=""></li>
                    </ul>
                    <div class="gou">
                        企业采购更优惠>
                    </div>

                </div>
                <!-- 头部 -->
                <div class="reputation">
                    <div class="reputation-left">
                        <h4>${res.title}</h4>
                        <div>${res.detal}</div>
                    </div>
                    <div class="reputation-right">
                        <span>
                           <p>91.2%</p>
                           <p>好评率</p>
                        </span>
                    </div>

                    <!-- 主体 -->
                    <div class="count">
                        <p>特价</p>
                        <div>距离结束还剩&nbsp;3天 4小时 30分 20秒</div>
                    </div>
                    <div class="purchase">
                        <div class="price-ph">
                            <span>活动价</span><b>￥</b><i>159</i><strong>￥199</strong>
                        </div>
                        <div class="management">
                            <span>专享9.5折</span><b>Pro会员叠加优惠，到手价</b><i>￥151.5</i><strong>&copy;立即开通</strong>
                        </div>
                        <div class="promotion">
                            <span>促销</span>
                            <a href="">全场换购</a>
                            <i>低至3折超值换购</i>
                        </div>
                        <div class="purchasing">
                            <span>返时购</span>
                            <i>最高返</i>
                            <a href="">15积分</a>
                        </div>
                        <div class="restrictions">
                            <span>限制</span>
                            <i>特价商品不可与优惠券叠加使用</i>
                        </div>
                        <div class="postage">
                            <span>邮费</span>
                            <i>满99包邮</i>
                        </div>
                        <div class="service">
                            <span>服务</span>
                            <i>网易自营品牌</i><b>7天无忧退换</b><s>不可用券</s> <strong>国内部分地方不可送</strong>
                        </div>

                    </div>
                    <!-- shop -->
                    <div class="operate">
                        <div class="shop-style">
                            <span>颜色</span>
                            <img src="..${res.color[0]}" alt="">
                            <img src="..${res.color[1]}" alt="">
                        </div>
                        <div class="num">
                            <span>数量</span>
                            <button>—</button><input type="" name="" class="num" value="1"><button>+</button>
                        </div>
                        <div class="place">
                            <a href="">立即购买</a>
                            <a href="" class="iconfont add">&#xe54b;加入购物车</a>
                            <span class="iconfont">&#xe62f;立即收藏</span>
                        </div>
                    </div>
                </div>
                    `;

                    $('.particulars-content').html(temp);

                    callback && callback(res.id, res.price);
                }
            });
        },
        addItem: function(id, price, num) {
            // shop
            let shop = cookie.get('shop'); // 获取cookie中的购物车 
            // 获取是为了判断它是否存在
            // 不存在 创建
            // 存在 修改

            let product = {
                id: id,
                price: price,
                num: num
            }

            if (shop) { // 存在
                shop = JSON.parse(shop); // 将字符串转成数组
                // 数组中已经存在了商品的id
                // 只修改num只 而不是将商品放入数组
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 不存在新建数组
                shop.push(product); // 放入商品
            }

            cookie.set('shop', JSON.stringify(shop), 1);
        }
    }
});