<template>
  <section style="height: 300px">
    <ks-popover :inherit-width="true">
      <ks-button size="medium" slot="trigger">Inherit width</ks-button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </ks-popover>
    <ks-popover :width="300">
      <ks-button size="medium" slot="trigger">Custom width</ks-button>
      <div class="wrapper"><p>Width set to 300px</p></div>
    </ks-popover>
    <ks-popover :offset="20">
      <ks-button size="medium" slot="trigger">Positiv offset</ks-button>
      <div class="wrapper"><p>20px offset</p></div>
    </ks-popover>
    <ks-popover :offset="-20">
      <ks-button size="medium" slot="trigger">Negativ offset</ks-button>
      <div class="wrapper"><p>-20px offset</p></div>
    </ks-popover>
    <!-- :options="{modifiers: { offset: { offset: '30'}}}" -->
    <!--ks-popover>
      <ks-button
        custom-color="primary"
        size="medium"
        :fluid="true"
        slot="trigger"
        >
        SHOW POPOVER
      </ks-button>
      <div class="wrapper">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <ks-icon close-popover><icon-close/></ks-icon>
      </div>
    </ks-popover-->
    <!--ks-popover position="bottom" :offset="-2" :width="300"-->
  </section>
</template>

<script>
import IconClose from '@/assets/icons/close'

export default {
  components: { IconClose }
}
</script>

<style scoped>
.wrapper {
  padding: var(--spacing--small) var(--spacing--medium);
}
</style>
