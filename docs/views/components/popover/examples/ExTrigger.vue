<template>
  <section>
    <ks-popover>
      <ks-icon slot="trigger"><icon-close/></ks-icon>
      <p close-popover>Click here to close</p>
    </ks-popover>
    <ks-popover>
      <ks-button
        custom-color="primary"
        size="medium"
        :fluid="true"
        slot="trigger"
        >
        SHOW POPOVER
        </ks-button>
      <p close-popover>Click here to close</p>
    </ks-popover>
  </section>
</template>

<script>
import IconClose from '@/assets/icons/close'

export default {
  components: { IconClose }
}
</script>

<style scoped>
p {
  padding: 0 var(--spacing--medium);
  text-align: center;
}
</style>
