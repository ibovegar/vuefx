<template>
  <section>
    <Badge v-model="value" :offset-x="-10" :offset-y="-12" raised sticky>
      <Icon name="email" class="medium"/>
    </Badge>
    <Badge v-model="value" :offset-x="-10" :offset-y="-12" raised>
      <Icon name="email" class="medium"/>
    </Badge>
  </section>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },

  mounted () {
    setInterval(() => {
      if (this.value++ > 2) this.value = 0
    }, 1000)
  }
}
</script>

<style scoped>
section {
  text-align: center;
}

.fx-badge + .fx-badge {
  margin-left: 50px;
}

.fx-icon {
  color: var(--color--font-4);
}
</style>
