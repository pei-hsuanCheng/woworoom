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
    <div class="flex justify-end mb-12">
      <button type="button" class="rounded-sm py-10 px-20 border border-black border-solid hover:text-gray-500 hover:border-gray-500 duration-300" @click="deleteAllOrders">清除全部訂單</button>
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
          <td><button type="button" class="underline text-x63ff" @click="changeStatus(item.id)" :disabled="item.paid">{{item.paid ? '已處理' : '未處理'}}</button></td>
          <td><button type="button" class="bg-xc224 text-xf px-12 py-4" @click="deleteOrder(item.id)">刪除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import c3 from "c3";
import dayjs from 'dayjs';
import { palette, header } from '../util';

export default {
  data() {
    return {
      orders: null,
    }
  },
  mounted() {
    axios.get('https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders', header).then((res) => {
      const {data} = res;
      this.orders = data.orders.length>0?data.orders:null;
      this.renderChart(this.orders);
      this.renderChart2(this.orders);
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
      });
    },
    deleteOrder(id) {
      axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders/${id}`, header).then((res) => {
        const {data} = res;
        this.orders = data.orders.length>0 ? data.orders : null;
        this.renderChart(this.orders);
        this.renderChart2(this.orders);
      });
    },
    deleteAllOrders() {
      axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/passion/orders`, header).then(() => {
        this.orders = null;
        this.renderChart(null);
        this.renderChart2(null);
      });
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
</style>