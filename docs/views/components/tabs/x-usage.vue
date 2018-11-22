<template>
  <section>
    <Tabs v-model="currentTab">
      <div slot="Template">Lorem ipsum</div>
      <div slot="Javascript">Dolor</div>
      <div slot="Stylesheet">Sit amet</div>
    </Tabs>
  </section>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 'Template'
    }
  }
}
</script>
