<template>
  <div class="my_r">
    <div class="my_bookshelf">
      <div class="title cf">
        <h2 class="fl ml10">
          <a href="javascript:void(0);">反馈留言</a></h2>
      </div>
      <div class="feedbackBox">

        <form method="post" action="/" id="Form1" @submit.prevent="checkForm()">
          <ul class="reg_list">
            <li>
              <textarea name="txtDescription" rows="2" v-model.trim="feedback" cols="20" id="txtDescription"
                        class="textarea" placeholder="请说明情况，并留下联系方式，你可以在个人中心【我的反馈】里查看回复~">
              </textarea>
            </li>
            <li class="mb20">
              <input type="submit" name="btnSave" value="提交" id="btnSave"
                     class="btn_red btn_big"/></li>
          </ul>
        </form>

      </div>
    </div>
  </div>
</template>


<script>
import "@/assets/styles/user.css";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import {submitFeedBack} from "@/api/user";
import {ElMessage} from "element-plus";
import {setNickName} from "@/utils/auth";
export default {
  name: "feedBackEdit",
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      feedback: ''
    });

    const checkForm = () => {
      let errStr = '';
      if (state.feedback === '') {
        errStr = '反馈内容必须填写';
      } else if (state.feedback.length < 5) {
        errStr = '反馈内容不能少于5个字';
      }
      if (errStr !== '') {
        ElMessage.warning(errStr)
        return false;
      }else {
        submitFeedBack(state.feedback).then(res => {
          if (res.code === '00000'){
            state.feedback = ''
            ElMessage.success("更新成功");
            router.back();
          }
        });
      }

    }

    return {
      ...toRefs(state),
      checkForm
    };
  },
};
</script>

<style scoped>
</style>