<template>
  <header class="lH bg-xf h-full">
    <nav class="lHNav max-w-1100 mx-auto flex justify-between items-center flex-grow">
      <h1 class="font-black text-24 flex-grow">WOWOROOM</h1>
      <ul v-if="getCurrentRouteName === 'back'" class="flex -mx-24 flex-shrink-0">
        <li v-for="item in backMenu" :key="item.title">
          <a :href="item.href" class="p-24 duration-300" :class="item.class">{{item.title}}</a>
        </li>
      </ul>
      <ul v-else class="flex -mx-24 flex-shrink-0">
        <li v-for="item in indexMenu" :key="item.title">
          <a :href="item.href" class="p-24 duration-300" :class="item.class">{{item.title}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        indexMenu: [{
          title: '床墊優勢',
          href: '#positive',
          class: 'hover:text-x63f8',
        },{
          title: '好評推薦',
          href: '#recommendList',
          class: 'hover:text-x63f8',
        },{
          title: '運送方式',
          href: '#logisticsFlow',
          class: 'hover:text-x63f8',
        },{
          title: '立即預訂',
          href: '#productList',
          class: 'text-x63f8 hover:bg-x315f hover:text-xf',
        }],
        backMenu: [{
          title: '後台管理',
          href: '#',
          class: 'hover:text-x63f8',
        },{
          title: '管理員登入',
          href: '#',
          class: 'text-x63f8 hover:bg-x315f hover:text-xf',
        }]
      }
    },
    computed: {
      getCurrentRouteName() {
          return this.$router.history.current.name;
      }
    }
  }
</script>

<style></style>