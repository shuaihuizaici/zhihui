import"./index-DzeyjNAw.js";import{N as F}from"./index-DrmGwNqa.js";import{_ as O,o as j,S as G,r as h,C as J,p as n,a as u,D as s,G as o,N as i,F as K,E as U,v as D,T as Y,aa as H,M as Q,Y as W,s as r,J as X,K as Z,I as ss}from"./index-Bo7BXbGR.js";import{g as es,a as ts}from"./address-BX750gIF.js";import{c as V,a as z}from"./order-w9RlPGIo.js";import{u as os}from"./cart-AW91Fwhi.js";import"./request-CGeKHk3j.js";const f=m=>(X("data-v-33f5770e"),m=m(),Z(),m),as={class:"pay"},is={class:"address"},ds={class:"left-icon"},ls={key:0,class:"info"},ns={class:"info-content"},rs={class:"name"},cs={class:"mobile",style:{"margin-left":"10px"}},_s={class:"pay-list"},ps={class:"list"},us={class:"left"},ms=["src"],vs={class:"right"},hs={class:"tit text-ellipsis-2"},fs={class:"info"},ys={class:"count"},gs={class:"price"},ks={class:"flow-num-box"},ws={class:"money"},Is={class:"pay-detail"},xs={class:"pay-cell"},Ns=f(()=>s("span",null,"订单总金额：",-1)),bs={class:"red"},Ss=f(()=>s("div",{class:"pay-cell"},[s("span",null,"优惠券："),s("span",null,"无优惠券可用")],-1)),Ts={class:"pay-cell"},Ls=f(()=>s("span",null,"配送费用：",-1)),Cs={key:0},qs={key:1,class:"red"},$s={class:"pay-way"},Bs=f(()=>s("span",{class:"tit"},"支付方式",-1)),Ds={class:"pay-cell"},Vs={class:"red"},zs={class:"buytips"},Ms={class:"footer-fixed"},Ps={class:"left"},Rs={__name:"index",setup(m){let M=os(),_=j(),P=G(),c=h(""),d=_.query.mode,k=_.query.goodsId,w=_.query.goodsSkuId,I=_.query.goodsNum,x=_.query.cartIds,p=h({});async function R(){let e=await es(),a=await ts();p.value=e.data.list.find(g=>g.address_id===a.data.defaultId)}let l=h(),y=h();async function A(){if(d==="cart"){let e=await V(d,{cartIds:x});l.value=e.data.order,y.value=e.data.personal}else if(d==="buyNow"){let e=await V(d,{goodsId:k,goodsSkuId:w,goodsNum:I});l.value=e.data.order,y.value=e.data.personal}}async function E(){if(d==="cart"){let e=c.value;await z(d,{cartIds:x,remar:e})}else{let e=c.value;await z(d,{goodsId:k,goodsSkuId:w,goodsNum:I,remar:e})}W("支付成功"),M.getList(),setTimeout(()=>{P.replace("/dingdan")},400)}return J(()=>{A(),R()}),(e,a)=>{var N,b,S,T,L,C,q,$,B;const g=F,v=ss;return r(),n("div",as,[u(g,{fixed:"",title:"订单结算台","left-arrow":"",onClickLeft:a[0]||(a[0]=t=>e.$router.go(-1))}),s("div",is,[s("div",ds,[u(v,{name:"logistics"})]),(N=o(p))!=null&&N.address_id?(r(),n("div",ls,[s("div",ns,[s("span",rs,i((b=o(p))==null?void 0:b.name),1),s("span",cs,i((S=o(p))==null?void 0:S.phone),1)])])):(r(),n("div",{key:1,class:"info",onClick:a[1]||(a[1]=t=>e.$router.push("/dizhi"))}," 请选择配送地址 ")),s("div",{class:"right-icon",onClick:a[2]||(a[2]=t=>e.$router.push("/dizhi"))},[u(v,{name:"arrow"})])]),s("div",_s,[s("div",ps,[(r(!0),n(K,null,U((T=o(l))==null?void 0:T.goodsList,t=>(r(),n("div",{class:"goods-item",key:t.goods_id},[s("div",us,[s("img",{src:t.goods_image,alt:""},null,8,ms)]),s("div",vs,[s("p",hs,i(t.goods_name),1),s("p",fs,[s("span",ys,"x"+i(t.total_num),1),s("span",gs,"¥"+i(t.total_pay_price),1)])])]))),128))]),s("div",ks,[s("span",null,"共 "+i((L=o(l))==null?void 0:L.orderTotalNum)+" 件商品，合计：",1),s("span",ws,"￥"+i((C=o(l))==null?void 0:C.orderTotalPrice),1)]),s("div",Is,[s("div",xs,[Ns,s("span",bs,"￥"+i((q=o(l))==null?void 0:q.orderTotalPrice),1)]),Ss,s("div",Ts,[Ls,o(p)?(r(),n("span",qs,"+￥0.00")):(r(),n("span",Cs,"请先选择配送地址"))])]),s("div",$s,[Bs,s("div",Ds,[s("span",null,[u(v,{name:"balance-o"}),D("余额支付（可用 ¥ "+i(($=o(y))==null?void 0:$.balance)+" 元）",1)]),s("span",Vs,[u(v,{name:"passed"})])])]),s("div",zs,[Y(s("textarea",{"onUpdate:modelValue":a[3]||(a[3]=t=>Q(c)?c.value=t:c=t),placeholder:"选填：买家留言（50字内）",name:"",id:"",cols:"30",rows:"10"},null,512),[[H,o(c)]])])]),s("div",Ms,[s("div",Ps,[D("实付款："),s("span",null,"￥"+i((B=o(l))==null?void 0:B.orderTotalPrice),1)]),s("div",{class:"tipsbtn",onClick:E},"提交订单")])])}}},Ks=O(Rs,[["__scopeId","data-v-33f5770e"]]);export{Ks as default};
