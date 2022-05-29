<template>
  <div class="my_r">
    <div class="my_info cf">
      <div class="my_info_txt">
        <ul class="mytab_list">
          <li><i class="tit">我的密码</i><input name="oldPass" v-model="oldPassword" type="password" id="txtOldPass" class="s_input" placeholder="请输入原密码" /></li>
          <li><i class="tit">&nbsp;</i><input name="txtNewPass1" v-model="newPassword1" type="password" id="txtNewPass1" class="s_input" placeholder="请输入新密码" /></li>
          <li><i class="tit">&nbsp;</i><input name="txtNewPass2" v-model="newPassword2" type="password" id="txtNewPass2" class="s_input" placeholder="请确认新密码" /></li>
          <li><i class="tit">&nbsp;</i><input type="submit" name="btnExchangePassword" value="修改" id="btnExchangePassword" @click="updatePassword()" class="s_btn btn_red" /></li>
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
import {getUserinfo, updateUserInfo, updateUserPassword} from "@/api/user";
import {ElMessage} from "element-plus";
import {setNickName} from "@/utils/auth";
export default {
  name: "setPassword",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      oldPassword: '',
      newPassword1: '',
      newPassword2: ''
    })

    const updatePassword = () => {
      if (state.oldPassword == null || state.oldPassword === ''){
        ElMessage.warning("原密码不能为空!");
        return;
      }
      if (state.newPassword1 == null || state.newPassword1 === ''){
        ElMessage.warning("新密码不能为空!")
        return;
      }
      if (state.newPassword2 == null || state.newPassword2 === ''){
        ElMessage.warning("确认密码不能为空!")
        return;
      }
      if (state.newPassword1 !== state.newPassword2){
        ElMessage.warning("两次输入的新密码不匹配!")
        return;
      }

      updateUserPassword({
        'oldPassword': state.oldPassword,
        'newPassword1': state.newPassword1,
        'newPassword2': state.newPassword2
      }).then(res => {
        if (res.code === '00000'){
          state.newPassword1 = '';
          state.newPassword2 = '';
          state.oldPassword = '';
          ElMessage.success("更新成功");
          router.back();
        }
      });
    }

    return {
      ...toRefs(state),
      updatePassword
    };
  },
};
</script>

<style scoped>
</style>