<template>
  <div class="main">
    <div class="header">
      <div class="white--text text-uppercase header-text">Carte d'identité WEB</div>
    </div>
    <div class="center">
      <div class="picture-avatar"></div>
      <div class="id-info" v-if="$store.state.accounts.google.peopleData != null">
        <div class="name id-info-block">
          <div class="id-info-label">Nom :</div>
          <div
            class="id-info-item"
          >{{ this.$store.state.accounts.google.peopleData.lastName | prettyName }}</div>
        </div>
        <div class="name id-info-block">
          <div class="id-info-label">Prénom :</div>
          <div
            class="id-info-item"
          >{{ this.$store.state.accounts.google.peopleData.firstName | prettyName }}</div>
        </div>
        <div class="date id-info-block">
          <div class="id-info-label">Né(e) le :</div>
          <div
            class="id-info-item"
          >{{ this.$store.state.accounts.google.peopleData.birthDate | prettyDate }}</div>
        </div>
        <div class="name id-info-block">
          <div class="id-info-label">Adresse(s) mail :</div>
          <ul>
            <li
              v-for="mail in this.$store.state.accounts.google.peopleData.mails"
              v-bind:key="mail"
              class="id-info-item"
            >{{mail}}</li>
          </ul>
        </div>
        <div class="name id-info-block">
          <div class="id-info-label">Adresse(s) postale(s) :</div>
          <div class="id-info-item">{{this.$store.state.accounts.google.peopleData.addresses[0]}}</div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap");

* {
  border: none;
  padding: 0;
  margin: 0;
}
.main {
  height: 378px;
  width: 544px;
  background-color: #c4c4c4;
  border-radius: 31px;
  padding: 20px;
}

.id-info-label {
  color: #17438c;
}
.id-info-item {
  color: black;
  font-family: "Odibee Sans", cursive;
  font-size: 17px;
  margin-left: 20px;
}
.id-info-block {
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: row;

  .picture-avatar {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #cacac5;
    height: 202px;
    width: 150px;
    margin-top: auto;
  }
  .id-info {
    background-color: transparent;
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
  }
}
.footer {
  width: 100%;
  height: 89px;
  background-color: #fffcf3;
  border-radius: 0 0 31px 31px;
}
</style>
