<template>
  <section>
    <component-debug :width="30" show>
      <Flex :gutter="20" justify-content="center">
        <FlexItem :height="160" :width="160">
          <Slide :duration="Number(duration)" :enter="enter" :leave="leave" :easing="easing">
            <Paper v-show="toggle" height="100%" width="100%"/>
          </Slide>
        </FlexItem>
      </Flex>
      <div slot="debug">
        <Flex dir="column" :gutter="20">
          <Flex align-items="center">
            <FlexItem :width="120">TIMING</FlexItem>
            <Select v-model="duration" :options="durationOptions" fixed/>
          </Flex>
          <Flex align-items="center">
            <FlexItem :width="120">ENTER</FlexItem>
            <Select v-model="enter" :options="directionOptions" fixed/>
          </Flex>
          <Flex align-items="center">
            <FlexItem :width="120">LEAVE</FlexItem>
            <Select v-model="leave" :options="directionOptions" fixed/>
          </Flex>
          <Flex align-items="center">
            <FlexItem :width="120">EASING</FlexItem>
            <Select v-model="easing" :options="easingOptions" fixed/>
          </Flex>
          <br>
          <button @click="toggle = !toggle">Toggle</button>
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
      enter: 'down',
      leave: 'up',
      duration: '300',
      easing: 'easeOutCubic',
      directionOptions: [
        { name: 'down', value: 'down' },
        { name: 'up', value: 'up' },
        { name: 'left', value: 'left' },
        { name: 'right', value: 'right' }
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
