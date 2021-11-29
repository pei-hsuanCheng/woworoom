<template>
  <div>
    <section class="kv max-w-1100 mx-auto p-28 box-border">
      <div class="relative mb-60">
        <figure>
          <img :src="kvImg" alt="窩窩家居 跟您一起品味生活" />
        </figure>
        <h2 class="absolute bottom-0 left-0 text-32 text-xf ml-52 mb-48">窩窩家居<br>跟您一起品味生活</h2>
      </div>
      <h3 class="text-28 text-center">床墊優勢</h3>
      <ul class="flex -mx-14 mt-28">
        <li class="mx-14 text-center">
          <figure>
            <img :src="kvImg2" alt="原木料環保" />
          </figure>
          <em class="mt-8">原木料環保</em>
        </li>
        <li class="mx-14 text-center">
          <figure>
            <img :src="kvImg3" alt="好收納" />
          </figure>
          <em class="mt-8">好收納</em>
        </li>
        <li class="mx-14 text-center">
          <figure>
            <img :src="kvImg4" alt="好組裝" />
          </figure>
          <em class="mt-8">好組裝</em>
        </li>
      </ul>
    </section>
    <section class="bg-xf8">
      <div class="max-w-1100 mx-auto p-48">
        <h3 class="text-28 text-center mb-20">家具比較</h3>
        <table class="compareTable">
          <tr>
            <th></th>
            <th class="text-20">窩窩系統模組家具</th>
            <th class="text-x79 text-20">組合式家具</th>
            <th class="text-x79 text-20">實木家具</th>
          </tr>
          <tr>
            <th class="text-20">可單人自行組裝</th>
            <td><span class="material-icons-outlined">done</span></td>
            <td class="text-x79">不一定</td>
            <td></td>
          </tr>
          <tr>
            <th class="text-20">可多次重複拆裝</th>
            <td><span class="material-icons-outlined">done</span></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="text-20">床墊規格彈性大</th>
            <td><span class="material-icons-outlined">done</span></td>
            <td class="text-x79">不一定</td>
            <td class="text-x79">不一定</td>
          </tr>
          <tr>
            <th class="text-20">材質可長久使用</th>
            <td><span class="material-icons-outlined">done</span></td>
            <td></td>
            <td><span class="material-icons-outlined">done</span></td>
          </tr>
          <tr>
            <th class="text-20">小客車即可搬運</th>
            <td><span class="material-icons-outlined">done</span></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kvImg: require('../assets/img/kv_img.png'),
      kvImg2: require('../assets/img/kv_img_2.png'),
      kvImg3: require('../assets/img/kv_img_3.png'),
      kvImg4: require('../assets/img/kv_img_4.png'),
    }
  }
}
</script>

<style>
.compareTable {
  width: 730px;
  border-collapse: collapse;

  .tr {
    border-bottom: 1pt solid #B9B9B9;
  }

  .td, th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
  }
}
</style>