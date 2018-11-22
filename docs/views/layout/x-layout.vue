<template>
  <section>
    <FxPaper :elevation="5">
      <FxFlex :gutter="20">
        <img :src="require('docs/assets/img/album-art.png')"/>
        <FxFlex direction="column" :gutter="20" flex="1">
          <FxFlex align-items="center" class="hr">
            <h3 flex="1">View popular songs in related category</h3>
            <FxIcon name="dots-vertical"/>
          </FxFlex>
          <FxFlex direction="column" justify-content="center"  flex="1">
            <h2>The Silver Dollars</h2>
            <h1>Track 3: Worlds In Between</h1>
          </FxFlex>
          <FxFlex align-items="center">
            <div flex="1">
              <button><FxIcon name="play"/></button>
              <button><FxIcon name="pause"/></button>
              <button><FxIcon name="skip-previous"/></button>
              <button><FxIcon name="rewind"/></button>
              <button><FxIcon name="fast-forward"/></button>
              <button><FxIcon name="skip-next"/></button>
            </div>
            <FxIcon name="volume-high"/>
          </FxFlex>
        </FxFlex>
      </FxFlex>
    </FxPaper>
  </section>
</template>

<style scoped>
h1 {
  margin: 0;
  @mixin font-size 26;
}

h2 {
  margin: 5px 0;
  font-weight: var(--font-weight--small);
  @mixin font-size 18;
}

h3 {
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

.hr {
  margin: 0;
  border: 0;
  border-bottom: 1px solid var(--color--border-3);
}
</style>
