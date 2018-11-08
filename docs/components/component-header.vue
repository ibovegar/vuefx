<template>
  <div class="title-l1">
    <h1>{{ name  }}</h1>
    <p><slot/></p>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>
