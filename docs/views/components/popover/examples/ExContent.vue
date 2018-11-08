<template>
  <section style="height: 300px">
    <fx-popover :inherit-width="true">
      <fx-button size="medium" slot="trigger">Inherit width</fx-button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </fx-popover>
    <fx-popover :width="300">
      <fx-button size="medium" slot="trigger">Custom width</fx-button>
      <div class="wrapper"><p>Width set to 300px</p></div>
    </fx-popover>
    <fx-popover :offset="20">
      <fx-button size="medium" slot="trigger">Positiv offset</fx-button>
      <div class="wrapper"><p>20px offset</p></div>
    </fx-popover>
    <fx-popover :offset="-20">
      <fx-button size="medium" slot="trigger">Negativ offset</fx-button>
      <div class="wrapper"><p>-20px offset</p></div>
    </fx-popover>
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
        <ks-icon name="icon-close" close-popover/>
      </div>
    </ks-popover-->
    <!--ks-popover position="bottom" :offset="-2" :width="300"-->
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.wrapper {
  padding: var(--spacing--small) var(--spacing--medium);
}
</style>
