<template>
  <section>
    <Flex :gutter="40" justify-content="center">
      <Icon
        name="invert-colors"
        :rotate90="rotate90"
        :rotate180= "rotate180"
        :rotate270="rotate270"
        :flip-h="flipH"
        :flip-v="flipV"
        :spin="spin"
        :tiny="tiny"
        :small="small"
        :medium="medium"
        :large="large"
        :font1="font1"
        :font2="font2"
        :font3="font3"
        :font4="font4"
        :font5="font5"
        :font6="font6"
        :font-i="fontI"
        />
    </Flex>
    <div slot="debug">
      <Flex :gutter="10" wrap>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="rotate90"/>&nbsp;&nbsp;Rotate 90
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="rotate180"/>&nbsp;&nbsp;Rotate 180
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="rotate270"/>&nbsp;&nbsp;Rotate 270
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="flipH"/>&nbsp;&nbsp;Flip horizontally
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="flipV"/>&nbsp;&nbsp;Flip vertically
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="spin"/>&nbsp;&nbsp;Spin
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="tiny"/>&nbsp;&nbsp;Tiny
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="small"/>&nbsp;&nbsp;Small
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="medium"/>&nbsp;&nbsp;Medium
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="large"/>&nbsp;&nbsp;Lagre
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="font1"/>&nbsp;&nbsp;Font-1
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="font2"/>&nbsp;&nbsp;Font-2
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="font3"/>&nbsp;&nbsp;Font-3
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="font4"/>&nbsp;&nbsp;Font-4
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="font5"/>&nbsp;&nbsp;Font-5
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="font6"/>&nbsp;&nbsp;Font-6
        </Flex>
        <Flex tag="label" align-items="center">
          <input type="checkbox" v-model="fontI"/>&nbsp;&nbsp;Font-i
        </Flex>
      </Flex>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      rotate90: false,
      rotate180: false,
      rotate270: false,
      flipH: false,
      flipV: false,
      spin: false,
      tiny: false,
      small: false,
      medium: false,
      large: false,
      font1: false,
      font2: false,
      font3: false,
      font4: false,
      font5: false,
      font6: false,
      fontI: false
    }
  }
}
</script>
