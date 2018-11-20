<template>
  <section>
    <fx-flex fx-background="fill-1" :gutter="20">
      <fx-flex-item>
        <img :src="require('docs/assets/img/album-art.png')"/>
      </fx-flex-item>
      <fx-flex-item flex="1">
        <fx-flex direction="column" height="100%" :gutter="20">
          <fx-flex-item>
            <fx-flex align-items="center" height="100%">
              <fx-flex-item flex="1">
                <h3>View popular songs in related category</h3>
              </fx-flex-item>
              <fx-flex-item :width="22">
                <fx-icon name="dots-vertical"/>
              </fx-flex-item>
            </fx-flex>
          </fx-flex-item>
          <fx-flex-item flex="1"><hr></fx-flex-item>
          <fx-flex-item flex="2">
            <h2>The Silver Dollars</h2>
            <h1>Track 3: Worlds In Between</h1>
          </fx-flex-item>
          <fx-flex-item flex="1">
            <fx-flex align-items="center">
              <fx-flex-item flex="1">
                <button><fx-icon name="play"/></button>
                <button><fx-icon name="pause"/></button>
                <button><fx-icon name="skip-previous"/></button>
                <button><fx-icon name="rewind"/></button>
                <button><fx-icon name="fast-forward"/></button>
                <button><fx-icon name="skip-next"/></button>
              </fx-flex-item>
              <fx-flex-item>
                <fx-icon name="volume-high"/>
              </fx-flex-item>
            </fx-flex>
          </fx-flex-item>
        </fx-flex>
      </fx-flex-item>
    </fx-flex>
  </section>
</template>

<style scoped>
h1 {
  margin: 10px 0;
  @mixin font-size 26;
}

h2 {
  margin: 5px 0;
  font-weight: var(--font-weight--small);
  @mixin font-size 18;
}

h3 {
  margin: 0;
  font-weight: var(--font-weight--medium);
  @mixin font-size 16;
}

button {
  margin-right: 10px;
  height: 60px;
  width: 60px;
  padding: 0;
  border: 0;
  border-radius: 100%;
  background-color: var(--color--fill-6);
  cursor: pointer;

  &:hover {
    background-color: var(--color--fill-7);
  }
}

hr {
  margin: 0;
  border: 0;
  height: 1px;
  background-color: var(--color--border-3);
}
</style>
