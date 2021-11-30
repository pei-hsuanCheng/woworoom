<template>
  <div class="max-w-1100 mx-auto py-60">
    <h3 class="text-28 mb-96 text-center">全產品類別營收比重</h3>
    <div id="chart"></div>
    <div class="flex justify-end mb-12">
      <button type="button" class="rounded-sm py-10 px-20 border border-black border-solid hover:text-gray-500 hover:border-gray-500 duration-300">清除全部訂單</button>
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
          <th>訂單狀態</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10088377474</td>
          <td>
            <span>小杰</span><br>
            <span>0912345678</span>
          </td>
          <td>高雄市前鎮區六合路183巷66號</td>
          <td>cccexample@gmail.com</td>
          <td>Louvre 雙人床架</td>
          <td>2021/03/08</td>
          <td><button type="button" class="underline text-x63ff">未處理</button></td>
          <td><button type="button" class="bg-xc224 text-xf px-12 py-4">刪除</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import c3 from "c3";

export default {
  mounted() {
    c3.generate({
      data: {
        columns: [
          ["data1", 30],
          ["data2", 120],
          ["data3", 50],
        ],
        type: "pie",
        colors: {
          data1: '#DACBFF',
          data2: '#5434A7',
          data3: '#9D7FEA'
        },
      },
    });
  },
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