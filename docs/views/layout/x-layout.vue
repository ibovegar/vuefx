<template>
  <section>
    <Paper :elevation="5">
      <Flex :gutter="20">
        <img :src="require('docs/assets/img/album-art.png')"/>
        <Flex direction="column" flex="1">
          <Flex align-items="center" class="hr">
            <h3 flex="1">View popular songs in related category</h3>
            <Icon name="dots-vertical"/>
          </Flex>
          <Flex direction="column" justify-content="center"  flex="1">
            <h2>The Silver Dollars</h2>
            <h1>Track 3: Worlds In Between</h1>
          </Flex>
          <Flex align-items="center">
            <div flex="1">
              <button><Icon name="play"/></button>
              <button><Icon name="pause"/></button>
              <button><Icon name="skip-previous"/></button>
              <button><Icon name="rewind"/></button>
              <button><Icon name="fast-forward"/></button>
              <button><Icon name="skip-next"/></button>
            </div>
            <Icon name="volume-high"/>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  </section>
</template>

<style scoped>
img {
  width: 28%;
  height: 28%;
  background-repeat: no-repeat;
  background-size: contain;
}

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
