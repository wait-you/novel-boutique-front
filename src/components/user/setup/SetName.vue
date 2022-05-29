<template>
  <div class="my_r">
    <div class="my_info cf">
      <div class="my_info_txt">
        <ul class="mytab_list">
          <li><i class="tit">我的昵称</i><input name="txtNiceName" type="text" v-model="nickName"
                                            maxlength="20" id="txtNiceName" class="s_input"
                                            placeholder=""/></li>
          <li><i class="tit">&nbsp;</i>用户名只能包括汉字、英文字母、数字和下划线</li>
          <li><i class="tit">&nbsp;</i><input type="button" @click="updateName()" name="btn" value="修改"
                                              id="btn" class="s_btn btn_red"/></li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/styles/user.css";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getUserinfo ,updateUserInfo} from "@/api/user";
import {ElMessage} from "element-plus";
import {setNickName} from "@/utils/auth";
export default {
  name: "setName",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      userPhoto: "",
      nickName: "",
      userSex: "0"
    });

    onMounted(async () => {
      const { data } = await getUserinfo();
      state.userPhoto = data.userPhoto;
      state.nickName = data.nickName;
      state.userSex = data.userSex;
    });

    const updateName = () => {
      if (state.nickName == null || state.nickName === ''){
        ElMessage.warning("昵称不能为空!");
        return;
      }
      let strTemp = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
      if (!strTemp.test(state.nickName)) {
        ElMessage.warning("昵称格式不正确!");
        return;
      }
      updateUserInfo({
        'userPhoto':state.userPhoto,
        'nickName': state.nickName,
        'userSex': state.userSex
      }).then(res => {
        if (res.code === '00000'){
          ElMessage.success("更新成功");
          setNickName(state.nickName);
          router.back();
        }
      });
    }

    return {
      ...toRefs(state),
      updateName
    };
  },
};
</script>

<style scoped>
</style>