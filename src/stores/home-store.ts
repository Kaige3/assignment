import { UserDto } from "@/apis/__generated/model/dto";
import { api } from "@/utils/api-instance";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeStore = defineStore("home",()=>{
  const userInfo = ref<UserDto["UserRepository/COMPLEX_FETCHER"]>({
    createdTime:"",
    editedTime:"",
    id:"",
    nickname:"",
    password:"",
    phone:"",
  });

  const registerShow = ref(false);

  const getUserInfo = async ()=>{
    userInfo.value = await api.userController.getUserInfo();
    return userInfo.value;
  }

  return { userInfo,registerShow,getUserInfo}

})
