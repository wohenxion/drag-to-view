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
      <slot name="nenu"></slot>
    </nav>
    <main>
      <!-- 我们希望把主要内容放这里 -->
      <slot></slot>
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
}
header {
  background: yellow;
  min-height: 40px;
}
nav {
  width: 220px;
}
main {
  flex: 1;
}
footer {
  background: black;
}
.form-wrap {
  width: 400px;
}
</style>
