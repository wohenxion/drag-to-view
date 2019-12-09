<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/edit">Edit</router-link>
    </div>
    test
  </div>
</template>
<style scoped lang="scss">
#nav {
  padding: 20px;
  position: absolute;
  box-shadow: rgb(187, 183, 183) 0px 2px 4px;
  width: 100%;
  left: 0;
  top: 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
