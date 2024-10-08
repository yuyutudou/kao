<template>
  <div>
    <div class="m-2 ml-4">代码仓库</div>
    <hr />
    <div class="flex">
      <div
        class="m-3"
        @click="activeTab = 'recent'"
        :class="{ 'border-b-4 border-blue-500': activeTab === 'recent' }"
      >
        最近访问
      </div>
      <div
        class="m-3"
        @click="activeTab = 'all'"
        :class="{ 'border-b-4 border-blue-500': activeTab === 'all' }"
      >
        全部仓库
      </div>
      <div
        class="m-3"
        @click="activeTab = 'openSource'"
        :class="{ 'border-b-4 border-blue-500': activeTab === 'openSource' }"
      >
        开源仓库
      </div>
      <div class="bg-black text-white m-3 text-sm ml-[65vw]">
        <span class="m-3">创建代码仓库</span>
      </div>
    </div>
    <div v-if="activeTab === recent">
      <recent />
      <all></all>
      <openSource></openSource>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import recent from "./recent.vue";
import all from "./all.vue";
import openSource from "./openSource.vue";

const activeTab = ref(null);
</script>

<style scoped></style>
