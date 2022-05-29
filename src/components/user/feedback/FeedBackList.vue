<template>
  <div class="my_r">
    <div class="my_bookshelf">
      <div class="title cf">
        <h2 class="fl">我的反馈</h2>
        <div class="fr">
          <router-link class="btn_red" :to="{name: 'feedback_edit'}">写反馈</router-link>
        </div>
      </div>

      <dl class="feedback_list cf">
        <dd id="feedbackList">
          <div class="comment_list clear" >
            <ul v-for="item in feedbackList">
              <li class="li_1">
                <span class="user_name fl"></span>
                <span class="time fl">{{item.createTime}}</span>
              </li>
              <li class="li_2">{{item.content}}</li>
            </ul>
          </div>
        </dd>
      </dl>
      <div class="cf">
        <div class="help_bar fl" v-if="total === 0">
          <a href=""><span class="txt">读者常见问题(18)</span></a>
        </div>
        <div class="pageBox cf" id="feedbackPage">
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
  </div>
</template>


<script>
import "@/assets/styles/user.css";
import {reactive, toRefs, onMounted, onActivated} from "vue";
import { useRouter, useRoute } from "vue-router";
import { getUserinfo ,updateUserInfo, listFeedback} from "@/api/user";
import {ElMessage} from "element-plus";
import {setNickName} from "@/utils/auth";
export default {
  name: "feedBackList",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      page: 1,
      limit: 5,
      total: 0,
      feedbackList: []
    });

    onActivated(async () => {
      const { data } = await listFeedback(state.page, state.limit);
      state.feedbackList = data.list
      state.page = data.pageNum;
      state.limit = data.pageSize;
      state.total = data.total;
    })

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
</style>