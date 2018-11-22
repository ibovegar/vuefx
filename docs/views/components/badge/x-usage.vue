<template>
  <section>
    <Badge :value="4" :offset-x="-10" :offset-y="-12" raised>
      <Icon name="email" class="medium"/>
    </Badge>
    <Badge :value="5" :offset-x="-9" :offset-y="-6" raised>
      <button>LOREM IPSUM</button>
    </Badge>
    <Badge :value="6">LOREM IPSUM </Badge>
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
