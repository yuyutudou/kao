<template>
  <div class="flex">
    <div class="a">
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="{ 'bg-gray-200': selected === index }"
        @click="changeStyle(index)"
      >
        <Icon :icon="item.icon" />
        <span>{{ item.text }}</span>
      </div>
      <hr class="w-12 ml-4" />
      <div class="b">
        <div>
          <Icon
            icon="tdesign:menu-application"
            class="w-5 h-5 cursor-pointer"
          />
          <Icon icon="mdi-light:bell" class="w-5 h-5 cursor-pointer mt-3" />
          <Icon
            icon="mynaui:zero-hexagon"
            class="w-5 h-5 cursor-pointer mt-3"
          />
          <Icon
            icon="material-symbols-light:help-outline"
            class="w-5 h-5 cursor-pointer mt-3"
          />
          <Icon
            icon="ic:baseline-account-circle"
            class="w-5 h-5 cursor-pointer mt-3"
          />
        </div>
      </div>
    </div>
    <div v-if="selected === 4">
      <CodeComponent />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import CodeComponent from "./code.vue";
const selected = ref(-1);

const items = [
  { icon: "lsicon:work-order-info-filled", text: "工作台" },
  { icon: "pajamas:project", text: "项目" },
  { icon: "catppuccin:adobe-ai", text: "AI" },
  { icon: "arcticons:writer", text: "事项" },
  { icon: "ph:code-fill", text: "代码" },
  { icon: "icon-park-outline:ad-product", text: "制品" },
  { icon: "carbon:observed-lightning", text: "洞察" },
  { icon: "material-symbols-light:menu-book-outline", text: "知识" },
  { icon: "tabler:settings-automation", text: "自动化" },
  { icon: "mdi:account-outline", text: "" },
];

const changeStyle = (index) => {
  selected.value = index;
};
</script>

<style scoped>
.b div {
  display: flex;
  flex-direction: column; /* 让子元素垂直排列 */
  align-items: center;
  width: 80px;
  text-align: center;
}
.a div {
  display: flex;
  flex-direction: column; /* 让子元素垂直排列 */
  align-items: center;
  width: 80px;
  text-align: center;
  margin-top: 7px;
  cursor: pointer; /* 添加鼠标指针样式 */
  transition: background-color 0.3s; /* 过渡动画 */
}
.a div:hover {
  background-color: #f0f0f0; /* 鼠标悬停时的背景颜色 */
}
</style>
