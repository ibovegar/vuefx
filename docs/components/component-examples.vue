<template>
  <div class="component-examples">
    <title-2 title="Examples"/>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isExamples: true
    }
  }
}
</script>
