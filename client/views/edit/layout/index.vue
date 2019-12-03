<template>
  <div class="layout">
    <header>
      <!-- 我们希望把页头放这里 -->
      <slot name="header"></slot>
    </header>
    <aside class="side-bar">
      <slot name="sideBar"></slot>
    </aside>
    <nav>
      <slot name="menu"></slot>
    </nav>
    <main>
      <!-- 我们希望把主要内容放这里 -->
      <div class="edit-container"><slot></slot></div>
    </main>
    <article class="form-wrap">
      <slot name="right"></slot>
    </article>
    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
}
header {
  background: yellow;
  min-height: 40px;
}
nav {
  width: 240px;
}
main {
  flex: 1;
  background-color: #f3f3f3;
  height: 100%;
  overflow-y: auto;

  .edit-container {
    background-color: #fff;
    margin: 40px 20px;
  }
}
footer {
  background: black;
}
.form-wrap {
  width: 400px;
}
</style>
