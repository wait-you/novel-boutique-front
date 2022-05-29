<template>
  <div class="my_r">
    <div class="my_bookshelf">
      <div class="title cf">
        <h2 class="fl">我的书评</h2>
        <div class="fr"></div>
      </div>
      <div class="bookComment">
        <div class="no_contet no_comment" v-if="commentList.length === 0">
          您还没有发表过评论！
        </div>
        <div class="commentBar" id="commentBar">
          <div class="comment_list cf"  v-for="item in commentList">
            <div class="user_heads fl" vals="389">
              <img :src="item.userPhoto ? item.userPhoto : man" class="user_head" alt=""/>
                <span class="user_level1" style="display: none;">见习</span>
            </div>
            <ul class="pl_bar fr">
              <li class="user_heads fl">

              </li>
              <li class="name">
                  {{ item.nickName }}
              </li>
              <li class="dec">
                {{ item.commentContent }}
              </li>
              <li class="other cf">
                <span class="time fl">{{ item.createTime }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pageBox cf" id="commentPage">
        <el-pagination
            small
            background
            :page-size="limit"
            :hide-on-single-page="true"
            layout="prev, pager, next"
            :total="total"
            class="mt-4"
        />
      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/styles/user.css";
import {reactive, toRefs, onActivated} from "vue";
import { useRouter, useRoute } from "vue-router";
import { listComment} from "@/api/user";
import man from "@/assets/images/man.png";
export default {
  name: "commentList",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      page: 1,
      limit: 3,
      total: 0,
      commentList: []
    });

    onActivated(async () => {
      const { data } = await listComment(state.page, state.limit);
      state.page = data.page
      state.limit = data.limit
      state.total = data.total
      state.commentList = data.list
      console.log(data)
    });

    return {
      ...toRefs(state),
      man
    };
  },
};
</script>

<style scoped>
</style>