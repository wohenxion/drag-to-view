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
    <main @click.stop="">
      <!-- 我们希望把主要内容放这里 -->
      <div class="edit-container"><slot></slot></div>
    </main>
    <article class="form-wrap" @click.stop="">
      <slot name="right"></slot>
    </article>
    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100%;
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
    box-shadow: 0 0 10px 2px #cecece;
  }
}
header {
  height: 58px;
  // line-height: 58px;
  overflow: hidden;
  position: absolute;
  box-shadow: rgb(187, 183, 183) 0px 2px 4px;
  width: 100%;
  left: 0;
  top: 0;
}
footer {
  background: black;
}
.form-wrap {
  width: 325px;
}
</style>
