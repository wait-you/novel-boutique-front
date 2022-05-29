<template>
  <div class="my_r">
    <div class="my_info cf">
      <div class="my_info_txt">
        <ul class="mytab_list">
          <li><i class="tit">我的性别</i>
            <label><input type="radio" name="sex" value="0" v-model="userSex" />&nbsp;男生</label>
            <label><input class="ml20" type="radio" name="sex" value="1" v-model="userSex"  />&nbsp;女生</label>
          </li>
          <li class="mt20"><i class="tit">&nbsp;</i><input type="button" @click="updateSex()" name="btn" value="修改" id="btn" class="s_btn btn_red" /></li>
          <li><i class="tit">&nbsp;</i><span id="LabErr"></span></li>
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
  name: "setSex",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      errMsg: '',
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

    const updateSex = () => {
      updateUserInfo({
        'userPhoto':state.userPhoto,
        'nickName': state.nickName,
        'userSex': state.userSex
      }).then(res => {
        if (res.code === '00000'){
          ElMessage.success("更新成功");
          router.back();
        }
      });
    }

    return {
      ...toRefs(state),
      updateSex
    };
  },
};
</script>

<style scoped>
</style>