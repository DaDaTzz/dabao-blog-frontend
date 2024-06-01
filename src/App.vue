<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>

</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import {useRoute} from "vue-router";
import {onMounted} from "vue";

const route = useRoute();

/**
 * 全局初始化函数
 */
const doInit = () =>{
  console.log("欢迎关注程序员 Da 的日常！")
}

onMounted(() => {
  doInit();
})

</script>