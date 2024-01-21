let obj = JSON.parse($response.body);

// 填入会员数据 loginname参数即可共享会员
obj.loginname = "o-5mbv-PKzMhG_xi6m1Bhw8MDgGI";

obj.diff = "2222222";
obj.freegold = "2222222";
obj.memberdays = "2222";
obj.package = "15";

$done({ body: JSON.stringify(obj) });