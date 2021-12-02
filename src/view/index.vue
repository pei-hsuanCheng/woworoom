<template>
  <div>
    <section class="kv max-w-1100 mx-auto pt-32 box-border">
      <div class="relative">
        <figure>
          <img :src="kvImg" alt="窩窩家居 跟您一起品味生活" />
        </figure>
        <h2 class="absolute bottom-0 left-0 text-32 text-xf ml-52 mb-48">窩窩家居<br>跟您一起品味生活</h2>
      </div>
    </section>
    <section class="max-w-1100 mx-auto py-60 box-border" id="positive">
      <h3 class="text-28 text-center">床墊優勢</h3>
      <ul class="flex -mx-14 mt-28">
        <li class="mx-14 text-center">
          <figure class="mb-8">
            <img :src="kvImg2" alt="原木料環保" />
          </figure>
          <em>原木料環保</em>
        </li>
        <li class="mx-14 text-center">
          <figure class="mb-8">
            <img :src="kvImg3" alt="好收納" />
          </figure>
          <em>好收納</em>
        </li>
        <li class="mx-14 text-center">
          <figure class="mb-8">
            <img :src="kvImg4" alt="好組裝" />
          </figure>
          <em>好組裝</em>
        </li>
      </ul>
    </section>
    <section class="bg-xf8" id="compareList">
      <div class="max-w-1100 mx-auto p-48">
        <h3 class="text-28 text-center mb-20">家具比較</h3>
        <table class="compareTable mx-auto">
          <tr>
            <th></th>
            <th class="text-20">窩窩系統模組家具</th>
            <th class="text-x79 text-20">組合式家具</th>
            <th class="text-x79 text-20">實木家具</th>
          </tr>
          <tr>
            <th class="text-20">可單人自行組裝</th>
            <td><span class="material-icons text-x63f8">done</span></td>
            <td class="text-x79">不一定</td>
            <td></td>
          </tr>
          <tr>
            <th class="text-20">可多次重複拆裝</th>
            <td><span class="material-icons text-x63f8">done</span></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-20">床墊規格彈性大</th>
            <td><span class="material-icons text-x63f8">done</span></td>
            <td class="text-x79">不一定</td>
            <td class="text-x79">不一定</td>
          </tr>
          <tr>
            <th class="text-20">材質可長久使用</th>
            <td><span class="material-icons text-x63f8">done</span></td>
            <td></td>
            <td><span class="material-icons text-x63f8">done</span></td>
          </tr>
          <tr>
            <th class="text-20">小客車即可搬運</th>
            <td><span class="material-icons text-x63f8">done</span></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </section>
    <section class="bg-x315f p-48" id="recommendList">
      <h3 class="text-xf text-28 mb-32 text-center">好評推薦</h3>
      <div class="max-w-1100 mx-auto py-10 overflow-x-scroll overflow-y-hidden">
        <ul class="recommendList -mx-16 -my-10 ml-96">
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg1" alt="Jodan 雙人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg1" alt="王六角" />
                  </div>
                  <div class="ml-8">
                    <p>王六角</p>
                    <p class="text-x63f8 text-14">Jodan 雙人床架</p>
                  </div>
                </header>
                <p>CP值很高。</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg2" alt="Antony 雙人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg2" alt="Leaf" />
                  </div>
                  <div class="ml-8">
                    <p>Leaf</p>
                    <p class="text-x63f8 text-14">Antony 雙人床架</p>
                  </div>
                </header>
                <p>很喜歡～還有送三年保固～</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg3" alt="Charles 系列儲物組合" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg3" alt="美濃鄧子琪" />
                  </div>
                  <div class="ml-8">
                    <p>美濃鄧子琪</p>
                    <p class="text-x63f8 text-14">Charles 系列儲物組合</p>
                  </div>
                </header>
                <p>廚房必備美用品！</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg4" alt="Antony 遮光窗簾" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg4" alt="isRaynotArray" />
                  </div>
                  <div class="ml-8">
                    <p>isRaynotArray</p>
                    <p class="text-x63f8 text-14">Antony 遮光窗簾</p>
                  </div>
                </header>
                <p>物超所值!</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg5" alt="Lourve 單人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg5" alt="程鮭魚" />
                  </div>
                  <div class="ml-8">
                    <p>程鮭魚</p>
                    <p class="text-x63f8 text-14">Lourve 單人床架</p>
                  </div>
                </header>
                <p>租屋用剛剛好</p>
              </div>
            </div>
          </li>
        </ul>
        <ul class="recommendList -mx-16 -my-10">
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg6" alt="Louvre 雙人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg6" alt="小杰" />
                  </div>
                  <div class="ml-8">
                    <p>小杰</p>
                    <p class="text-x63f8 text-14">Louvre 雙人床架</p>
                  </div>
                </header>
                <p>非常舒適，有需要會再回購</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg7" alt="Charles 雙人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg7" alt="江八角" />
                  </div>
                  <div class="ml-8">
                    <p>江八角</p>
                    <p class="text-x63f8 text-14">Charles 雙人床架</p>
                  </div>
                </header>
                <p>品質不錯～</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg8" alt="Antony 床邊桌" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg8" alt="juni讚神" />
                  </div>
                  <div class="ml-8">
                    <p>juni讚神</p>
                    <p class="text-x63f8 text-14">Antony 床邊桌</p>
                  </div>
                </header>
                <p>讚ㄉ！</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg1" alt="Lourve 單人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg9" alt="久安說安安" />
                  </div>
                  <div class="ml-8">
                    <p>久安說安安</p>
                    <p class="text-x63f8 text-14">Lourve 單人床架</p>
                  </div>
                </header>
                <p>一個人躺剛剛好。</p>
              </div>
            </div>
          </li>
          <li class="recommendItem px-16 py-10">
            <div class="hrCard flex bg-xf">
              <img class="hrCardImg" :src="productImg6" alt="Antony 雙人床架" />
              <div class="hrCardBd p-12">
                <header class="hrCardHd flex items-center mb-9">
                  <div class="avatar sm">
                    <img :src="userImg10" alt="PeiQun" />
                  </div>
                  <div class="ml-8">
                    <p>PeiQun</p>
                    <p class="text-x63f8 text-14">Antony 雙人床架</p>
                  </div>
                </header>
                <p>睡起來很舒適</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="max-w-1100 p-32 mx-auto" id="logisticsFlow">
      <h3 class="text-28 mb-32 text-center">運送方式</h3>
      <ul class="flowList flex items-center justify-center">
        <li class="flowItem flex items-center justify-center relative">
          <div class="flex flex-col-reverse items-center">
            <em>選購商品</em>
            <p class="text-20">STEP.1</p>
            <div class="flowItemIcon flex justify-center items-center rounded-full border-2 border-solid border-black mb-8">
              <span class="material-icons text-6xl">shopping_cart</span>
            </div>
          </div>
        </li>
        <li class="flowItem flex items-center justify-center relative">
          <div class="flex flex-col-reverse items-center">
            <em>填寫預定資料</em>
            <p class="text-20">STEP.2</p>
            <div class="flowItemIcon flex justify-center items-center rounded-full border-2 border-solid border-black mb-8">
              <span class="material-icons text-6xl">format_list_bulleted</span>
            </div>
          </div>
        </li>
        <li class="flowItem flex items-center justify-center relative">
          <div class="flex flex-col-reverse items-center">
            <em>預定成功</em>
            <p class="text-20">STEP.3</p>
            <div class="flowItemIcon flex justify-center items-center rounded-full border-2 border-solid border-black mb-8">
              <span class="material-icons text-6xl">done</span>
            </div>
          </div>
        </li>
        <li class="flowItem flex items-center">
          <div class="flex flex-col-reverse items-center">
            <em>Email 付款資訊</em>
            <p class="text-20">STEP.4</p>
            <div class="flowItemIcon flex justify-center items-center rounded-full border-2 border-solid border-black mb-8">
              <span class="material-icons text-6xl">email</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="max-w-1100 mx-auto p-32" id="productList">
      <select class="w-1/4 py-8 px-12 mb-32 rounded-sm border border-gray-300 border-solid" @change="filterProducts($event)">
        <option value="all" selected>全部</option>
        <option value="床架">床架</option>
        <option value="收納">收納</option>
        <option value="窗簾">窗簾</option>
      </select>
      <div v-if="!filteredProducts" class="text-2xl">Loading...</div>
      <ul v-else class="flex flex-wrap -mx-14">
        <li v-for="item in filteredProducts" :key="item.id" class="productItem w-1/4 box-border">
          <div class="productCard m-14 relative">
            <img :src="item.images" class="w-full" :alt="item.title" />
            <button type="button" class="w-full bg-x0 text-center p-10 mb-8 text-xf hover:bg-x79 hover:text-xf duration-300" @click="addToCart(item.id)">加入購物車</button>
            <p class="text-20 mb-8">{{item.title}}</p>
            <p class="text-20 line-through">{{`NT$${addSeperator(item.origin_price)}`}}</p>
            <p class="text-28">{{`NT$${addSeperator(item.price)}`}}</p>
          </div>
        </li>
      </ul>
    </section>
    <section class="bg-xf8 p-48">
      <h3 class="text-28 mb-32 text-center">我的購物車</h3>
      <div class="max-w-1100 mx-auto">
        <table class="shoppingCart text-20 w-full mb-20">
          <thead>
            <tr>
              <th class="text-left">品項</th>
              <th class="text-left">單價</th>
              <th class="text-left">數量</th>
              <th class="text-left" colspan="2">金額</th>
            </tr>
          </thead>
          <tbody v-if="carts">
            <tr v-for="item in carts.carts" :key="item.id">
              <td>
                <div class="flex">
                  <img class="w-80 h-80 flex-shrink-0" :src="item.product.images" :alt="item.product.title" />
                  <p class="ml-14 flex-grow">{{item.product.title}}</p>
                </div>
              </td>
              <td>{{`NT$${addSeperator(item.product.price)}`}}</td>
              <td>{{item.quantity}}</td>
              <td>{{`NT$${addSeperator(item.product.price * item.quantity)}`}}</td>
              <td>
                <button @click="removeProduct(item.id)">
                  <span class="text-28 material-icons hover:text-gray-500 duration-300">close</span>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="5" class="text-center">購物車還是空的喔(*´▽`*)</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between items-center">
          <button type="button" class="border border-solid border-black rounded-sm px-20 py-10 hover:text-gray-500 hover:border-gray-500 duration-300" @click="removeCart()">刪除所有品項</button>
          <div>
            <span class="text-20 mr-56">總金額</span>
            <span class="text-28">{{`NT$${carts?addSeperator(carts.finalTotal):0}`}}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="p-60">
      <h3 class="text-28 mb-32 text-center">填寫預訂資料</h3>
      <p v-if="posting" class="text-center text-2xl text-x70">訂單送出中...</p>
      <form  v-else class="max-w-sm mx-auto" @submit="sendOrder">
        <div class="formGroup mb-20">
          <label for="name" class="mb-6">姓名</label>
          <div class="relative">
            <input class="w-full py-8 px-12 rounded-sm border border-solid border-gray-300" type="text" id="name" name="name" v-model="form.name" placeholder="請輸入姓名">
            <span v-if="error.name" class="text-xc224 pl-8 absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">{{error.name}}</span>
          </div>
        </div>
        <div class="formGroup mb-20">
          <label for="tel" class="mb-6">電話</label><br>
          <div class="relative">
            <input class="w-full py-8 px-12 rounded-sm border border-solid border-gray-300" type="tel" id="tel" name="tel" v-model="form.tel" placeholder="請輸入電話">
            <span v-if="error.tel" class="text-xc224 pl-8 absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">{{error.tel}}</span>
          </div>
        </div>
        <div class="formGroup mb-20">
          <label for="email" class="mb-6">Email</label><br>
          <div class="relative">
            <input class="w-full py-8 px-12 rounded-sm border border-solid border-gray-300" type="email" id="email" name="email" v-model="form.email" placeholder="請輸入 Email">
            <span v-if="error.email" class="text-xc224 pl-8 absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">{{error.email}}</span>
          </div>
        </div>
        <div class="formGroup mb-20">
          <label for="address" class="mb-6">寄送地址</label><br>
          <div class="relative">
            <input class="w-full py-8 px-12 rounded-sm border border-solid border-gray-300" type="text" id="address" name="address" v-model="form.address" placeholder="請輸入寄送地址">
            <span v-if="error.address" class="text-xc224 pl-8 absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">{{error.address}}</span>
          </div>
        </div>
        <div class="formGroup mb-48">
          <label for="payment" class="mb-6">交易方式</label><br>
          <div class="relative">
            <select class="w-full py-8 px-12 rounded-sm border border-gray-300 border-solid" name="payment" v-model="form.payment" id="payment">
              <option value="ATM">ATM</option>
              <option value="信用卡">信用卡</option>
              <option value="超商付款">超商付款</option>
            </select>
            <span v-if="error.payment" class="text-xc224 pl-8 absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">{{error.payment}}</span>
          </div>
        </div>
        <div class="formGroup text-center">
          <p v-if="error.cart" class="text-xc224 mb-4">{{error.cart}}</p>
          <input class="py-10 w-3/4 bg-x0 text-xf rounded cursor-pointer hover:bg-x79 hover:text-xf duration-300" type="submit" value="送出預訂資料" />
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      kvImg: require('../assets/img/kv_img.png'),
      kvImg2: require('../assets/img/kv_img_2.png'),
      kvImg3: require('../assets/img/kv_img_3.png'),
      kvImg4: require('../assets/img/kv_img_4.png'),
      userImg1: require('../assets/img/user_1.png'),
      userImg2: require('../assets/img/user_2.png'),
      userImg3: require('../assets/img/user_3.png'),
      userImg4: require('../assets/img/user_4.png'),
      userImg5: require('../assets/img/user_5.png'),
      userImg6: require('../assets/img/user_6.png'),
      userImg7: require('../assets/img/user_7.png'),
      userImg8: require('../assets/img/user_8.png'),
      userImg9: require('../assets/img/user_9.png'),
      userImg10: require('../assets/img/user_10.png'),
      productImg1: require('../assets/img/product_1.png'),
      productImg2: require('../assets/img/product_2.png'),
      productImg3: require('../assets/img/product_3.png'),
      productImg4: require('../assets/img/product_4.png'),
      productImg5: require('../assets/img/product_5.png'),
      productImg6: require('../assets/img/product_6.png'),
      productImg7: require('../assets/img/product_7.png'),
      productImg8: require('../assets/img/product_8.png'),
      products: null,
      filteredProducts: null,
      carts: null,
      posting: false,
      fetching: null,
      form: {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: '',
      },
      error: {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: '',
        cart: ''
      },
    }
  },
  mounted() {
    axios.get('https://livejs-api.hexschool.io/api/livejs/v1/customer/passion/products').then((res) => {
      const {data} = res;
      this.products = data.products;
      this.filteredProducts = data.products;
    });
    axios.get('https://livejs-api.hexschool.io/api/livejs/v1/customer/passion/carts').then((res) => {
      const {data} = res;
      if (data.carts.length>0) {
        this.carts = data;
      }
    });
  },
  methods: {
    addSeperator(value) {
      return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    },
    filterProducts(e) {
      const targetCategory = e.target.value;
      if(targetCategory === 'all') {
        this.filteredProducts = this.products;
      }
      this.filteredProducts = this.products.filter(item => item.category === targetCategory);
    },
    addToCart(productId){
      const org = this.carts?.carts.find(item => item.product.id === productId);
      const newQuantity = org ? ++org.quantity : 1;
      const body = {
        data: {
          id: org?.id,
          productId,
          quantity: newQuantity,
        }
      }

      const action = {
        method: org ? 'patch' : 'post',
        url: 'https://livejs-api.hexschool.io/api/livejs/v1/customer/passion/carts',
        data: body
      }

      axios(action).then((res) => {
        const {data} = res;
        this.carts = data;
      });
    },
    removeCart() {
      axios.delete('https://livejs-api.hexschool.io/api/livejs/v1/customer/passion/carts').then(() => {
        this.carts = null;
      });
    },
    removeProduct(id) {
      axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/customer/passion/carts/${id}`).then((res) => {
        const {data} = res;
        if (data.carts.length>0) {
          this.carts = data;
        } else {
          this.carts = null;
        }
      });
    },
    checkForm() {
      const {name, tel, email, address, payment} = this.form;
      let pass = true;
      const newError = {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: '',
        cart: '',
      };

      if(!this.carts) {
        newError.cart = '購物車內沒有品項';
        pass = false;
      }

      if(!name){
        newError.name = '姓名為必填!';
        pass = false;
      }
      if(!tel){
        newError.tel = '電話為必填!';
        pass = false;
      }
      if(!/^[0-9]{10}$/.test(tel)){
        newError.tel = '電話格式錯誤!';
        pass = false;
      }
      if(!email){
        newError.email = 'Email為必填!';
        pass = false;
      }
      if(!/\S+@\S+\.\S+/.test(email)){
        newError.email = 'Email格式錯誤!';
        pass = false;
      }
      if(!address){
        newError.address = '寄送地址為必填!';
        pass = false;
      }
      if(address.length<10){
        newError.address = '寄送地址格式錯誤!';
        pass = false;
      }
      if(!payment){
        newError.payment = '交易方式為必填!';
        pass = false;
      }

      this.error = newError;
      return pass;
    },
    sendOrder(e) {
      e.preventDefault();
      this.posting = true;
      const pass = this.checkForm();
      if (!pass) {
        this.posting = false;
        return
      }

      const body = {
        data: {
          user: this.form
        }
      }

      axios.post('https://livejs-api.hexschool.io/api/livejs/v1/customer/passion/orders', body).then(() => {
        this.initPage();
        this.posting = false;
        console.log(this.posting);
      });
    },
    initPage() {
      const vm = this;
      vm.products = null;
      vm.carts = null;
      vm.form = {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: '',
      };
    }
  }
}
</script>

<style>
.compareTable {
  width: 730px;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #B9B9B9;
  }

  td, th {
    width: 25%;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
  }
}

.hrCardImg {
  width: 95px;
  height: 102px;
  object-fit: cover;
}

.recommendList {
  width: 1760px;
}

.recommendItem {
  width: 350px;
  display: inline-block;
}

.flowItemIcon {
  width: 115px;
  height: 115px;
}

.flowList {
  .flowItem:not(:last-child) {
    &::after {
      content: "\e5df";
      font-family: 'Material Icons';
      font-size: 48px;
      padding: 24px;
      margin-bottom: 56px;
    }
  }
}

.productCard {
  &::after {
    content: "新品";
    background-color: black;
    color: white;
    padding: 8px 24px;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 12px;
    margin-right: -4px;
  }
}

.shoppingCart {
  border-collapse: collapse;

  tbody {
    tr {
      border-bottom: 1px solid #B9B9B9;
    }
  }

  th {
    width: 22%;
  }

  th, td {
    padding: 20px 20px 20px 0;
  }
}

</style>