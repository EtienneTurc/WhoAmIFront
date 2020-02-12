<template>
  <div class="main">
    <div class="header">
      <div class="white--text text-uppercase header-text">Carte d'identité WEB</div>
    </div>
    <div class="center">
      <div class="picture"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
* {
  border: none;
}
.main {
  height: 378px;
  width: 544px;
  background-color: #c4c4c4;
  border-radius: 31px;
  padding: 20px;
}
.header {
  width: 100%;
  height: 31px;
  background-color: #17488b;
  border-radius: 31px 31px 0 0;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  letter-spacing: 8px;
  position: relative;
  .header-text {
    position: absolute;
    bottom: 0px;
  }
}
.center {
  position: relative;
  width: 100%;
  height: 227px;
  background: rgb(165, 190, 221);
  background: linear-gradient(
    0deg,
    rgba(165, 190, 221, 1) 0%,
    rgba(149, 196, 186, 1) 100%
  );
  .picture {
    background-color: #cacac5;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 202px;
    width: 150px;
  }
}
.footer {
  width: 100%;
  height: 89px;
  background-color: #fffcf3;
  border-radius: 0 0 31px 31px;
}
</style>