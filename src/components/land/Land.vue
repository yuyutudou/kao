<template>
  <div class="flex">
    <img src="../../assets/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" />
    <div>
      <span></span>
      <div>
        <input type="text" placeholder="账号" />
        <input type="password" placeholder="密码" />
        <button>登陆</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
img {
  width: 400px;
  object-fit: fill;
  height: 625px;
}
.flex {
  display: flex; /* 启用 flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
}
</style>
