let baseUrl = "http://localhost/NSS"; // 基础路径 必须是绝对路径

define(['jquery'], function($) {
    return {
        render: function() {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function(res) {
                    console.log(res);
                    let temp = '';
                    res.forEach(elm => {
                        console.log(elm.pic);
                        let pic = elm.pic;

                        temp += `<div class="main-content">
                        <a href="${baseUrl}/src/html/particulars.html?id=${elm.id}">
                        <img src="..${elm.pic}">
                        <div id="price">
                            <div class="shop2">
                                <span>限时购<strong>￥159</strong>起</span>
                            </div>
    
                            <span class="shop1"> 限购200件&nbsp;仅剩4小时</span>
                        </div>
                        <div class="shop">
                            <div class="gou">
                                <span>${elm.title}</span>
                            </div>
                            <h4>
                                <a href="javascript">
                                    <span class="introduce">${elm.detal}</span>
                                </a>
                            </h4>
                            <p>
                                <span>
                                <span class="span1">${elm.price}</span>
                                <span class="span2">${elm.oldprice}</span>
                                </span>
                            </p>
                            </a>
                        </div>
                    </div>`;

                    });
                    console.log(temp)
                    $('.main-main').html(temp);
                }
            });
        }
    }
});