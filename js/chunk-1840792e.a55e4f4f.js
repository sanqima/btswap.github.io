(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1840792e"],{"1e5e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABs1BMVEUAAAD///+A//9V/6pAv78zzJkq1aogv585xqou0aIqv5UnxJ0kyKQgv58ew5YrxpwoyZQkwp4jxZcgv5UfwpknxJMjwZUiw5khxZQew5Yjv5Uiw5QhxJYgv5Mewpgjv5cgv5Uew5Ygw5Qgv5YewpMhwJIev5IhwZUgwpMgv5UfwpIhwZMfwJQfwpMev5UhwZQgwZMfwZUev5MewJQfwZMfv5QewZQfwZQfv5IewJMgv5QgwJMfwJQgwJQfwJIfwZMfv5IewJQewZMgwJIfwZQfwJQewJMev5IfwJQfwZMfv5Qev5MfwJMfwZMfv5IfwJMewZMev5QewJMfwJMfv5MfwJIewJMfwJIfwJMfwJMewJIewJMfwJIfv5MewJMewJIfwJMfv5MfwJIewJMfv5IfwJMfwJIfwJMewJMfwJIewJIewJMev5IfwJMfv5MewJMewJIev5MfwJMfv5IewJMfwJMfv5MfwJIev5MewJMfwJIfwJMfwJMfwJIewJIewJIewJMfwJIfv5MfwJIfwJIewJMev5IewJMfwJMfv5IfwJIfwJMewJIev5MewJIewJMev5Lt6vi+AAAAkHRSTlMAAQIDBAUGCAkLDA0OEBESExUWGBkaHR4fIiQmJygqLDAzNzg7PURGR0hLTlFTVFZXW1xdY2Rma2xtcHFyeXp7fH5/gYOFhoiKi4yQkpOUlZeYmZqcnaGio6WpqqussbKztLe6vL2+v8HHysvMzdDS09TX2Nve4OHk5ebn6err7e7v8PHy8/T19/j5+vv8/f4qSoISAAAB40lEQVQYGY3BiT+TAQDH4d8765xjokwtVDp0SumabuWojBSVWqQQ3Yc0KsnGZsf3T+7d8HmH930/nkeFjIN3IhNTyen3gx2Hi+SoqiuK5ffjoGyVdibIi0/Ok5fqrtBGDbNAeixUWyxp5/6Lw0tAvFHrhdKQ6qmUxd+ZAFoNrREGRoNaK/ASeOZRgRYg7NV6RivQJktDGlpk51wWmrSqbBbCsncLFgNa0QmjXtkzXkC/lgUSpIJyUhEnW6e8MHTL2W14rhwjSrpSznwxFrbLdAjG5GYATsh0F0JycxYeyRSBWrnZBW9lmoBiuVrkh0w/icvdd5YMSUkm5W4cSiRFicndNzJFkt6BT67i/JJpEGrkpgw+ytQOl+WmEXplqoc3ctMPZ2TyzJAql7Mdf8j4ldML9+TsGgwob+8SyWo5KZmFA1r2AF555OApDGtF+Ty0y94ViFVr1cksXJCd2hQ0y3IDaPNoo0sQ360CfcBQlTbwT8JnvyzGzSwkOkpl8R0tkbRvBsZ9KnAqBiwONQe8krx7miIJPhiS6uZgZJsKVPakyMlMf4pmyJkukql+ASJeFQr2/cUy11ejvGNJeGJojS1H7o98/cf8l9cPj2/VqtNp6JKNrVrnPHBVm9ECU9qU0NT1/4Y6s9b8uvKrAAAAAElFTkSuQmCC"},"4a7a":function(e,t,a){},6133:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claimed","type":"event"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},"6e13":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"snapshot-container"},[n("div",{staticClass:"table-wrap"},[n("div",{staticClass:"table-title"},[n("span",{staticClass:"title"},[e._v("Snap Shot")]),n("el-button",{attrs:{type:"success",round:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("Airdrop")])],1),n("div",{staticClass:"input-box"},[n("el-input",{attrs:{placeholder:"Search tokens"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchTableData(t)}},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}},[n("img",{attrs:{slot:"suffix",src:a("1e5e"),alt:""},on:{click:e.searchTableData},slot:"suffix"})])],1),n("div",{staticClass:"table-box"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.lock",value:e.loading,expression:"loading",modifiers:{lock:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"btswap_id",label:"ID",width:"220",sortable:""}}),n("el-table-column",{attrs:{prop:"address",label:"Address"}}),n("el-table-column",{attrs:{prop:"balance",label:"Balance"}})],1),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{layout:"prev, pager, next","page-size":e.page_size,total:e.total},on:{"current-change":e.currentChangeHandler}})],1)],1)]),n("el-dialog",{attrs:{title:"",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:e.closeDialog}},[n("p",[e._v("Enter an address to trigger a BT claim. If the address has any claimable BT it will be sent to them on submission.")]),n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"Address"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" Available quantity："+e._s(e.amount/1e18)+" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{loading:e.buttonLoading},on:{click:e.checkAddress}},[e._v("Check")])],1)],1)],1)},r=[],s=(a("4160"),a("159b"),a("96cf"),a("1da1")),o=a("bc3a"),i=a.n(o),l=a("6e11"),c=a.n(l),u=a("6133"),d=(a("b4ba"),"0xf650aA0403Ca0e9Cc54255ba9d49ae3a3099Ca9c"),p={name:"snapshot",components:{},data:function(){return{address:"",tableData:[],page:1,page_size:15,last_page:0,total:0,loading:!1,inputData:"",index:0,proof:[],dialogFormVisible:!1,form:{address:""},amount:0,buttonLoading:!1}},beforeCreate:function(){try{window.ethereum?(window.web3=new Web3(ethereum),c.a.setProvider(ethereum)):window.web3?(window.web3=new Web3(web3.currentProvider),c.a.setProvider(web3.currentProvider)):console.log("Non-Ethereum browser detected. You should consider trying MetaMask!")}catch(e){console.log("beforeCreate: ",e)}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.getTableData(e.page,e.page_size),window.MerkleContract=new c.a(u,d),t.next=5,ethereum.enable();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("created error: ",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},mounted:function(){if(web3){var e=web3.eth;this.ETH=e,this.getInfo()}},methods:{getTableData:function(e,t){var a=this;this.loading=!0,i()({method:"post",url:"https://api.btswap.com/btserver/v1/btswap/holders",data:{page:e,page_size:t},responseType:"json"}).then((function(e){a.loading=!1;var t=e.data;0==t.code&&(a.tableData=t.result.data,a.last_page=t.result.last_page,a.total=t.result.total)})).catch((function(e){a.loading=!1,console.log(e)}))},currentChangeHandler:function(e){this.getTableData(e,this.page_size)},claim:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{a=[],e.proof.forEach((function(e){a.push(e)})),MerkleContract.methods["claim"](e.index,e.form.address,e.amount,e.proof).send({from:e.address}).then((function(t){e.$message.success("claim success")})).catch((function(t){e.$message.error("claim: "+JSON.stringify(t))})),e.closeDialog()}catch(n){console.log("claim error",n)}case 1:case"end":return t.stop()}}),t)})))()},getInfo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.ETH.accounts;case 2:a=t.sent,a&&a.length&&(e.address=a[0]);case 4:case"end":return t.stop()}}),t)})))()},searchTableData:function(){var e=this;this.loading=!0,i()({method:"post",url:"https://api.btswap.com/btserver/v1/btswap/holders",data:{address:this.inputData},responseType:"json"}).then((function(t){e.loading=!1;var a=t.data;0==a.code&&(e.tableData=a.result.data,e.last_page=a.result.last_page,e.total=a.result.total)})).catch((function(t){e.loading=!1,console.log(t)}))},checkAddress:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.amount=0,0!=e.form.address.length){t.next=4;break}return e.$message.error("address is needed"),t.abrupt("return");case 4:e.buttonLoading=!0,i()({method:"post",url:"https://api.btswap.com/btserver/v1/merkle/list",data:{address:e.form.address},responseType:"json"}).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.buttonLoading=!1,n=a.data,0!=n.code){t.next=9;break}if(!(n.result.data.length>0)){t.next=9;break}return e.index=n.result.data[0].claim_data.index,t.next=7,MerkleContract.methods.isClaimed(e.index).call();case 7:r=t.sent,r?e.$message.error("address has been claimed"):(e.amount=n.result.data[0].claim_data.amount,e.proof=n.result.data[0].claim_data.proof);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.buttonLoading=!1,console.log(t)}));case 6:case"end":return t.stop()}}),t)})))()},closeDialog:function(){this.dialogFormVisible=!1,this.form.address="",this.amount=0}}},f=p,w=(a("f9a7"),a("2877")),m=Object(w["a"])(f,n,r,!1,null,null,null);t["default"]=m.exports},f9a7:function(e,t,a){"use strict";var n=a("4a7a"),r=a.n(n);r.a}}]);