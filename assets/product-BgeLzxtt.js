import{i as s}from"./request-CGeKHk3j.js";const o=(t,e)=>s.get("/goods/list",{params:{goodsName:t,page:e}}),a=t=>s.get("/goods/detail",{params:{goodsId:t}}),n=(t,e)=>s.get("/comment/listRows",{params:{goodsId:t,limit:e}}),m=t=>s({method:"GET",url:"/goods.service/list",params:{goodsId:t}}),g=t=>s({method:"GET",url:"/comment/list",params:t});export{a,n as b,m as c,g as d,o as g};
