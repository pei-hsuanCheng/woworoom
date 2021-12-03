<template>
  <div class="max-w-1100 mx-auto py-60">
    <div class="flex justify-around">
      <div>
        <h3 class="text-28 mb-96 text-center">全產品類別營收比重</h3>
        <div id="chart"></div>
      </div>
      <div>
        <h3 class="text-28 mb-96 text-center">全品項營收比重</h3>
        <div id="chart2"></div>
      </div>
    </div>
    <div v-if="fetching" class="mLoading">
      <img :src="loadingImg" alt="loading" class="mLoadingImg" />
    </div>
    <div v-else>
      <div class="flex justify-end mb-12">
        <button type="button" class="rounded-sm py-10 px-20 border border-black border-solid hover:text-gray-500 hover:border-gray-500 duration-300" @click="confrimDelete()">清除全部訂單</button>
      </div>
      <table class="orderList w-full">
        <thead>
          <tr>
            <th>訂單編號</th>
            <th>聯絡人</th>
            <th>聯絡地址</th>
            <th>電子郵件</th>
            <th>訂單品項</th>
            <th>訂單日期</th>
            <th class="w-1/12">訂單狀態</th>
            <th class="w-1/12">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!orders">
            <td colspan="8" class="text-center">尚無訂單</td>
          </tr>
          <tr v-else v-for="item in orders" :key="item.id">
            <td>{{item.id}}</td>
            <td>
              <span>{{item.user.name}}</span><br>
              <span>{{item.user.tel}}</span>
            </td>
            <td>{{item.user.address}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <ul>
                <li v-for="product in item.products" :key="product.id" class="mb-4">
                  {{product.title}}
                </li>
              </ul>
            </td>
            <td>{{renderDate(item.createdAt * 1000)}}</td>
            <td><button type="button" class="statusBtn" @click="changeStatus(item.id)" :disabled="item.paid" :class="{'disabled': item.paid}">{{item.paid ? '已處理' : '未處理'}}</button></td>
            <td><button type="button" class="bg-xc224 text-xf px-12 py-4" @click="confrimDelete(item.id)">刪除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal :openModal="openModal">
      <template #Modal_children>
        <p class="modalHdText text-center text-20 font-extrabold">{{msg}}</p>
        <div class="flex justify-between mt-32" :class="{'hidden': !confriming}">
          <button class="rounded-sm py-10 px-20 mr-4 border border-black border-solid hover:text-gray-500 hover:border-gray-500 duration-300" @click="deleteOrder">確定</button>
          <button class="rounded-sm py-10 px-20 ml-4 bg-red-600 text-xf hover:text-gray-200 hover:bg-red-800 duration-300" @click="openModal = false">取消</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios';
import c3 from "c3";
import dayjs from 'dayjs';
import Modal from '../components/Modal';
import { palette, header } from '../util';

export default {
  components: {
    Modal: Modal,
  },
  data() {
    return {
      loadingImg: require('../assets/img/loading.png'),
      orders: null,
      targetId: null,
      msg: null,
      openModal: false,
      confriming: false,
      fetching: false,
    }
  },
  mounted() {
    this.fetching = true;
    axios.get('https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders', header).then((res) => {
      const {data} = res;
      this.orders = data.orders.length>0?data.orders:null;
      this.renderChart(this.orders);
      this.renderChart2(this.orders);
      this.fetching = false;
    });
  },
  methods: {
    renderChart(data) {
      const categories = {};
      if (!data) return;

      data.forEach(item => {
        item.products.forEach(product => {
          if(categories[product.category]){
            categories[product.category]+=1;
          } else {
            categories[product.category] = 1;
          }
        });
      });

      const columns = [];
      const colors = {};
      Object.keys(categories).forEach((key, index) => {
        columns.push([key,categories[key]]);
        colors[key] = palette[index];
      });

      c3.generate({
        bindto: '#chart',
        data: {
          columns,
          type: "pie",
          colors,
        },
      });
    },
    renderChart2(data) {
      if (!data) return;
      
      const saleList = {};
      data.forEach(item => {
        item.products.forEach(product => {
          if(saleList[product.title]){
            saleList[product.title]+=1;
          } else {
            saleList[product.title] = 1;
          }
        });
      });

      const colors = {};
      const productList = Object.keys(saleList).map((key) => [key, saleList[key]]);
      productList.forEach((item, index) => {
        const next = index + 1;
        if(productList.length > next && item[1] > productList[next][1]){
          productList[index] = productList.splice(next, 1, item)[0];
        }
      });

      const columns = productList.reverse().splice(0,3);
      let otherQuantity = 0;
      productList.forEach(item => otherQuantity += item[1]);
      columns.push(['其他', otherQuantity]);

      columns.forEach((item, index) => {
        colors[item[0]] = palette[index];
      });

      c3.generate({
        bindto: '#chart2',
        data: {
          columns,
          type: "pie",
          colors,
        },
      });
    },
    changeStatus(id) {
      const body = {
        data: {
          id,
          paid: true,
        }
      };

      axios.put(`https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders`, body, header).then((res) => {
        const {data} = res;
        this.orders = data.orders;

        this.confriming = false;
        this.msg = '更改狀態成功';
        this.openModal = true;

        const timeout = setTimeout(()=> {
          this.openModal = false;
          this.msg = null;
          clearTimeout(timeout);
        }, 1500);
      });
    },
    confrimDelete(id) {
      this.confriming = true;

      if(id){
        this.targetId = id;
        this.msg = `確定刪除 訂單編號:${id}?`;
      } else {
        this.msg = `確定刪除所有訂單???`;
      }
      this.openModal = true;
    },
    deleteOrder() {
      this.fetching = true;
      if(this.targetId) {
        axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders/${this.targetId}`, header).then((res) => {
          const {data} = res;
          this.orders = data.orders.length>0 ? data.orders : null;
          this.renderChart(this.orders);
          this.renderChart2(this.orders);
          this.fetching = false;

          this.msg = '刪除成功!';
          this.openModal = true;
  
          const timeout = setTimeout(()=> {
            this.openModal = false;
            this.msg = null;
            clearTimeout(timeout);
          }, 1500);
        });
      } else {
        axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders`, header).then(() => {
          this.orders = null;
          this.renderChart(null);
          this.renderChart2(null);
          this.fetching = false;
  
          this.msg = '刪除成功!';
          this.openModal = true;
  
          const timeout = setTimeout(()=> {
            this.openModal = false;
            this.msg = null;
            clearTimeout(timeout);
          }, 1500);
        });
      }
    },
    renderDate(time) {
      return dayjs(time).format('YYYY/MM/DD')
    }
  }
};
</script>

<style>
.orderList {
  border: 1px solid black;
  border-collapse:collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid black;
  }

  td {
    vertical-align: top;
  }
}

.statusBtn {
  &:not(.disabled) {
    text-decoration: underline;
    color: #6A33FF;
  }

  &.disabled {
    color: #797979;
    cursor: auto;
  }
}
</style>