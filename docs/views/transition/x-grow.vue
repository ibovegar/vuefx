<template>
  <section>
    <component-debug :width="30" show>
      <Flex :gutter="20" justify-content="center">
        <FlexItem :height="100" :width="100">
          <Grow :origin="origin" :duration="Number(duration)" :easing="easing">
            <Paper v-show="toggle" height="100%" width="100%"/>
          </Grow>
        </FlexItem>
        <FlexItem :height="100" :width="100">
          <Grow :origin="origin" :duration="Number(duration) + 300" :easing="easing">
            <Paper v-show="toggle" height="100%" width="100%"/>
          </Grow>
        </FlexItem>
        <FlexItem :height="100" :width="100">
          <Grow :origin="origin" :duration="Number(duration) + 600" :easing="easing">
            <Paper v-show="toggle" height="100%" width="100%"/>
          </Grow>
        </FlexItem>
      </Flex>
      <div slot="debug">
        <Flex dir="column" :gutter="20">
          <Flex align-items="center">
            <FlexItem :width="120">TIMING</FlexItem>
            <Select v-model="duration" :options="durationOptions" fixed/>
          </Flex>
          <Flex align-items="center">
            <FlexItem :width="120">ORIGIN</FlexItem>
            <Select v-model="origin" :options="originOptions" fixed/>
          </Flex>
          <Flex align-items="center">
            <FlexItem :width="120">EASING</FlexItem>
            <Select v-model="easing" :options="easingOptions" fixed/>
          </Flex>
          <br>
          <button @click="toggle = !toggle">Toggle</button></FlexItem>
        </Flex>
      </div>
    </component-debug>
  </section>
</template>

<script>
import { easingPatterns } from '@/utils/easing.js'

export default {
  data () {
    return {
      toggle: true,
      origin: 'top left',
      duration: '300',
      easing: 'easeOutCubic',
      originOptions: [
        { name: 'top left', value: 'top left' },
        { name: 'top right', value: 'top right' },
        { name: 'bottom left', value: 'bottom left' },
        { name: 'bottom right', value: 'bottom right' },
        { name: 'center left', value: 'center left' },
        { name: 'center right', value: 'center right' },
        { name: 'center', value: 'center' }
      ],
      durationOptions: [
        { name: '100', value: '100' },
        { name: '200', value: '200' },
        { name: '300', value: '300' },
        { name: '500', value: '500' },
        { name: '1000', value: '1000' },
        { name: '2000', value: '2000' }
      ],
      easingOptions: []
    }
  },
  created () {
    for (let patternName of Object.keys(easingPatterns)) {
      this.easingOptions.push({ name: patternName, value: patternName })
    }
  }
}
</script>
