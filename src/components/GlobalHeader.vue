<template>
    <a-row class="globalHeader" align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu mode="horizontal" :selected-keys="selectedKeys" @menu-item-click="doMenuClick">
          <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
            <div class="titleBar">
              <img class="logo" src="../assets/logo.png" />
              <div class="title">达宝 blog</div>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path" >{{ item.name }}</a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
<!--        <div v-if="loginUserStore.loginUser.id">-->
<!--          {{ loginUserStore.loginUser.userName ?? "匿名用户"}}-->
<!--        </div>-->
<!--        <div v-else>-->
<!--          <a-button type="primary" href="/user/login">登录</a-button>-->
<!--        </div>-->
      </a-col>
    </a-row>
</template>


<script setup lang="ts">
import { routes } from "@/router/routes";
import {  useRouter } from "vue-router";
import { computed, ref } from "vue";


const router = useRouter()

// 当前选中的菜单项
const selectedKeys = ref(["/"]);
// 路由跳转时，自动更新选中的菜单项
router.afterEach((to) => {
  selectedKeys.value = [to.path]
})

// 展示在菜单栏的路由数组
const visibleRoutes = computed(() =>{
  return routes.filter((item) => {
    if (item.meta?.hideInMenu){
      return false;
    }
    return true;
  })
})


/**
 * 点击菜单跳转页面
 * @param Key
 */
const doMenuClick = (Key:string) =>{
  router.push({
    path: Key
  })
}


</script>

<style scoped>
#globalHeader{

}

.titleBar {
  display: flex;
  align-items: center;

}

.title {
  color: black;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>