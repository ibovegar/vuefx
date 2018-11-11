<template>
  <section>
    <fx-badge v-model="value" :offset-x="-10" :offset-y="-12" raised sticky>
      <fx-icon name="email" class="medium"/>
    </fx-badge>
    <fx-badge v-model="value" :offset-x="-10" :offset-y="-12" raised>
      <fx-icon name="email" class="medium"/>
    </fx-badge>
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
