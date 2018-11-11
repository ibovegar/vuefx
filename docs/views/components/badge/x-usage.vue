<template>
  <section>
    <fx-badge :value="4" :offset-x="-10" :offset-y="-12" raised>
      <fx-icon name="email" class="medium"/>
    </fx-badge>
    <fx-badge :value="5" :offset-x="-9" :offset-y="-6" raised>
      <button>LOREM IPSUM</button>
    </fx-badge>
    <fx-badge :value="6">LOREM IPSUM </fx-badge>
  </section>
</template>

<style scoped>
section {
  text-align: center;
}

.fx-badge + .fx-badge {
  margin-left: 100px;
}

.fx-icon {
  color: var(--color--font-4);
}
</style>
