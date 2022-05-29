<template>
  <div class="my_l">
    <ul class="log_list">
      <li><router-link class="link_1" active-class="on" :to="{name: 'user_info'}">个人中心</router-link></li>
      <li><router-link class="link_4" active-class="on" :to="{name: 'bookshelf_list'}">我的书架</router-link></li>
      <li><router-link class="link_6" active-class="on" :to="{name: 'comment_list'}">我的书评</router-link></li>
      <li><router-link class="link_7" active-class="on" :to="{name: 'feedback_list'}">我的反馈</router-link></li>
      <li><router-link class="link_8" active-class="on" :to="{name: 'user_setup'}">账号设置</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SetupList"
}
</script>

<style scoped>

</style>