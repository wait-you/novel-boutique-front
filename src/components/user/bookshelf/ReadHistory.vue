<template>
  <div class="my_r">
    <div class="my_bookshelf">
      <div class="title cf">
        <h2 class="fl"><router-link :to="{name: 'bookshelf_list'}">我的书架</router-link></h2>
        <i class="fl ml20 mr20 font16">|</i>
        <h2 class="fl"><router-link class="red" :to="{name: 'read_history'}">最近阅读</router-link></h2>
      </div>
      <div id="divData" class="updateTable">
        <table cellpadding="0" cellspacing="0">
          <thead>
          <tr>
            <th class="style">
              类别
            </th>
            <th class="name">
              书名
            </th>
            <th class="chapter">
              最新章节
            </th>
            <th class="time">
              更新时间
            </th>
            <th class="goread">
              书签
            </th>
          </tr>
          </thead>
          <tbody id="bookHistoryList" v-for="item in readHistoryList">

            <tr class="book_list" vals="291">
              <td class="style bookclass">
                <router-link :to="{path: '/bookclass', query : {category: item.categoryId}}">{{ item.catName }}</router-link>
              </td>
              <td class="name">
                <router-link :to="{ path: `/book/${item.bookId}` }">{{ item.bookName }}</router-link>
              </td>
              <td class="chapter" valsc="291|2037554|1">
                <router-link :to="{ path: `/book/${item.bookId}/${item.lastChapterId}` }">{{ item.lastChapterName }}</router-link>
              </td>
              <td class="time">
                {{ item.updateTime }}
              </td>
              <td class="goread">
                <router-link :to="{ path: `/book/${item.bookId}/${item.preContentId}` }">继续阅读</router-link>
              </td>
            </tr>

          </tbody>
        </table>
        <div class="pageBox cf" id="historyPage">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/styles/user.css";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import {getUserinfo, updateUserInfo, listFeedback, listReadHistory} from "@/api/user";
import {ElMessage} from "element-plus";
import {setNickName} from "@/utils/auth";
export default {
  name: "bookShelf",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      page: 1,
      limit: 3,
      total: 0,
      readHistoryList: []
    });

    onMounted(async () => {
      const { data } = await listReadHistory(state.page, state.limit);
      state.page = data.pageNum;
      state.limit = data.pageSize;
      state.total = data.total;
      state.readHistoryList = data.list;
      console.log(data)
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>