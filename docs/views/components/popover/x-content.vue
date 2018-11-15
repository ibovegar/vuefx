<template>
  <section>
    <fx-popover :inherit-width="true">
      <button slot="trigger">Inherit width</button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </fx-popover>
    <fx-popover :width="300">
      <button slot="trigger">Custom width</button>
      <div class="wrapper"><p>Width set to 300px</p></div>
    </fx-popover>
    <fx-popover :offset="20">
      <button slot="trigger">Positiv offset</button>
      <div class="wrapper"><p>20px offset</p></div>
    </fx-popover>
    <fx-popover :offset="-20">
      <button slot="trigger">Negativ offset</button>
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
