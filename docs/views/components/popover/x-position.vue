<template>
  <section>
    <Popover :options="{ placement: 'bottom' }">
      <button slot="trigger">BOTTOM</button>
      <p>Bottom</p>
    </Popover>
    <Popover :options="{ placement: 'top' }">
      <button slot="trigger">TOP</button>
      <p>Top</p>
    </Popover>
    <Popover :options="{ placement: 'left' }">
      <button slot="trigger">LEFT</button>
      <p>Left</p>
    </Popover>
    <Popover :options="{ placement: 'right' }">
      <button slot="trigger">RIGHT</button>
      <p>Right</p>
    </Popover>
    <Popover :offset="20">
      <button slot="trigger">Positiv offset</button>
      <div class="wrapper"><p>20px offset</p></div>
    </Popover>
    <Popover :offset="-20">
      <button slot="trigger">Negativ offset</button>
      <div class="wrapper"><p>-20px offset</p></div>
    </Popover>
  </section>
</template>
