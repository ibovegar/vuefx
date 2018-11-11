<template>
  <section>
    <component-debug :width="40" show>
      <fx-badge
        :value="567"
        :position="currentPos"
        :offset-x="Number(offsetX)"
        :offset-y="Number(offsetY)"
        raised
        >
        <button @click="changePos">{{ currentPos }}</button>
      </fx-badge>
      <div slot="debug">
        <form>
          <label>
            X-offset
            <input type="range" min="-100" max="40" v-model="offsetX" @input="onInput('x')"/>
          </label>
          <label>
            Y-offset
            <input type="range" min="-100" max="40" v-model="offsetY" @input="onInput('y')"/>
          </label>
          <label>
            Link offset
            <input type="checkbox" v-model="linked"/>
          </label>
        </form>
      </div>
    </component-debug>
  </section>
</template>

<script>
export default {
  data () {
    return {
      offsetX: -10,
      offsetY: -10,
      linked: true,
      index: 0,
      positions: [
        'right-top',
        'right-center',
        'right-bottom',
        'left-bottom',
        'left-center',
        'left-top'
      ]
    }
  },

  computed: {
    currentPos: function () {
      return this.positions[this.index]
    }
  },

  methods: {
    onInput: function (offset) {
      if (this.linked) {
        if (offset === 'x') this.offsetY = this.offsetX
        if (offset === 'y') this.offsetX = this.offsetY
      }
    },
    changePos: function () {
      this.index = this.index >= (this.positions.length - 1) ? 0 : this.index + 1
    }
  }
}
</script>

<style scoped>
.component-debug {
  padding: 50px 80px;
}

label {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  height: 40px;
  align-items: center;

  input[type="checkbox"] {
    margin-left: 15px;

  }
  input[type="range"] {
    width: 100%;
    margin-left: 15px;
  }
}

button {
  text-transform: uppercase;
}

.fx-badge + .fx-badge {
  margin-left: 40px;
}

.fx-icon {
  color: var(--color--font-4);
}
</style>
