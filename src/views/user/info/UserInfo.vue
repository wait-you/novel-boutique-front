<template>
  <div class="my_r">
    <div class="my_info cf">
      <img id="imgLogo" class="user_big_head" :src="userPhoto === '' ? man : userPhoto" />
      <div class="my_info_txt">
        <p class="my_name" id="my_name">{{nickName}}</p>
        <ul class="my_list">
          <li class="my_gold"><i>账户余额：</i><em class="red" id="accountBalance">{{accountBalance}}</em>屋币<!--<em class="red">+</em><em class="red">0</em>代金券--><a href="/pay/index.html" class="btn_link">立即充值</a></li>
          <li class="my_baonian"></li>

        </ul>
      </div>
    </div>
    <div class="my_bookshelf">
      <div class="title cf">
        <h4 class="fl">
          我的书架</h4>
        <router-link class="fr" :to="{ name: 'bookshelf_list' }">全部收藏</router-link>
      </div>
      <div class="updateTable">
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
          <tbody id="bookShelfList" v-for="item in bookshelfList">
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
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/user.css";
import man from "@/assets/images/man.png";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SetupList from "@/components/user/MenuList";
import {onActivated, onMounted, reactive, toRefs} from "vue";
import {getUserinfo, listBookshelf} from "@/api/user";
export default {
  name: "feedBack",
  setup(){
    const state = reactive({
      userPhoto: "",
      nickName: "",
      userSex: "0",
      accountBalance: '0',
      page: 1,
      limit: 5,
      total: 0,
      bookshelfList: []
    });

    onMounted(async () => {
      const { data } = await getUserinfo();
      state.userPhoto = data.userPhoto;
      state.nickName = data.nickName;
      state.userSex = data.userSex;
      state.accountBalance = data.accountBalance;
    })

    onActivated(async () => {
      const { data } = await listBookshelf(state.page, state.limit)

      state.bookshelfList = data.list
      state.page = data.pageNum;
      state.limit = data.pageSize;
      state.total = data.total;

      console.log(state.bookshelfList)

    });
    return {
      ...toRefs(state),
      man
    }
  },
  components: {
    Header,
    Footer,
    SetupList
  },
};
</script>

<style>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>