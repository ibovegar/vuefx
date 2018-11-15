<template>
  <section>
    <fx-popover :options="{ placement: 'bottom' }">
      <button slot="trigger">BOTTOM</button>
      <p>Bottom</p>
    </fx-popover>
    <fx-popover :options="{ placement: 'top' }">
      <button slot="trigger">TOP</button>
      <p>Top</p>
    </fx-popover>
    <fx-popover :options="{ placement: 'left' }">
      <button slot="trigger">LEFT</button>
      <p>Left</p>
    </fx-popover>
    <fx-popover :options="{ placement: 'right' }">
      <button slot="trigger">RIGHT</button>
      <p>Right</p>
    </fx-popover>
    <fx-popover :offset="20">
      <button slot="trigger">Positiv offset</button>
      <div class="wrapper"><p>20px offset</p></div>
    </fx-popover>
    <fx-popover :offset="-20">
      <button slot="trigger">Negativ offset</button>
      <div class="wrapper"><p>-20px offset</p></div>
    </fx-popover>
  </section>
</template>
