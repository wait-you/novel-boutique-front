<template>
  <div class="my_r">
    <div class="my_info cf">
      <div class="my_info_txt">
        <ul class="mytab_list">
          <li >
            <i class="tit">我的头像</i>
            <el-upload
                style="display: inline-block; position: relative"
                :action="baseUrl + '/resource/image'"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
              <img
                  style="position:absolute; left: 2px; top: -8px"
                  :src="userPhoto ?  userPhoto : man"
                  class="user_img"
              />
            </el-upload>

          </li>
          <li><i class="tit">我的昵称</i>{{ nickName }}<router-link :to="{name: 'set_name'}">&nbsp;&nbsp;[修改]</router-link></li>
          <li>
            <i class="tit">我的性别</i>
            {{ userSex === '0' ? '男' : '女' }}
            <router-link :to="{name: 'set_sex'}">&nbsp;&nbsp;[修改]</router-link>
          </li>
          <li>
            <i class="tit">我的密码</i>
            <router-link :to="{name: 'set_password'}">修改密码</router-link>
          </li>
          <li><i class="tit">当前状态</i><a @click="logout" href="javascript:void(0)">退出登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/styles/user.css";
import man from "@/assets/images/man.png";
import {reactive, toRefs, onMounted, onActivated} from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { UploadProps } from "element-plus";
import { getImgVerifyCode } from "@/api/resource";
import { getUserinfo ,updateUserInfo} from "@/api/user";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SetupList from "@/components/user/MenuList";
import {removeNickName, removeToken, removeUid} from "@/utils/auth";
export default {
  name: "setup",
  components: {
    Header,
    Footer,
    SetupList
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      userPhoto: "",
      nickName: "",
      userSex: "0",
      baseUrl: process.env.VUE_APP_BASE_API_URL,
      uploadImgBaseUrl: process.env.VUE_APP_BASE_UPLOAD_IMG_URL,
    });

    onActivated(async () => {
      const { data } = await getUserinfo();
      state.userPhoto = data.userPhoto;
      state.nickName = data.nickName;
      state.userSex = data.userSex;
    })

    const beforeAvatarUpload = (rawFile) => {
      if (rawFile.type !== "image/jpeg") {
        ElMessage.error("必须上传 JPG 格式的图片!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 5) {
        ElMessage.error("图片大小最多 5MB!");
        return false;
      }
      return true;
    };

    const handleAvatarSuccess = (response, uploadFile) => {
      state.userPhoto = response.data;
      updateUserInfo({
        'userPhoto':state.userPhoto,
        'nickName': state.nickName,
        'userSex': state.userSex
      });
    };

    const logout = () => {
      removeToken();
      removeNickName();
      removeUid()
      state.nickName = "";
    };

    return {
      ...toRefs(state),
      man,
      beforeAvatarUpload,
      handleAvatarSuccess,
      logout
    };
  },
};
</script>

<style scoped>

</style>