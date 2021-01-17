const app = new Vue({
  el:'#app',
  data:{
   list:[
       {
         id:1,
         name:'《算法导论》',
         date:'2020-12',
         price:85.00,
         count:1
       },
     {
       id:2,
       name:'《UNIX编程艺术》',
       date:'2020-11',
       price:90.00,
       count:1
     },
     {
       id:3,
       name:'《编程珠玑》',
       date:'2020-10',
       price:65.00,
       count:1
     },
     {
       id:4,
       name:'《代码大全》',
       date:'2020-19',
       price:128.00,
       count:1
     },
   ],

  },
  methods:{
    getFinalPrice(price){
      return '￥'+price.toFixed(2);
    },
    increment(index){
      this.list[index].count++;
    },
    decrement(index){
      this.list[index].count--
    },
    removeBtnClick(index){
      this.list.splice(index,1)
    }

    },
  computed:{
    totalPrice(){
    //   let total = 0;
    //   for(let i of this.list){
    //     total+=i.price*i.count;
    //   }
    //   return total;
      return this.list.reduce(function (preValue,book) {
        return preValue+book.price*book.count
      },0)
    }
},
  //过滤器
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2);
    },

  }
})