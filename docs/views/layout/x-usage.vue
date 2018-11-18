<template>
  <fx-flex direction="column" :gutter="40">
    <fx-flex-item fx-background="fill-6">
      <fx-flex :gutter="10" justify-content="flex-start">
        <fx-flex-item
          v-for="index in 8"
          :key="index"
          fx-background="info"
          :height="50"
          :width="50"
          />
      </fx-flex>
      <fx-flex :gutter="10">
        <fx-flex-item
          v-for="index in 8"
          :key="index"
          fx-background="info"
          :height="50" :width="50"
          />
      </fx-flex>
      <fx-flex :gutter="10" justify-content="flex-end">
        <fx-flex-item
          v-for="index in 8"
          :key="index"
          fx-background="info"
          :height="50"
          :width="50"
          />
      </fx-flex>
    </fx-flex-item>
    <fx-flex-item fx-background="fill-6">
      <fx-flex :gutter="20" justify-content="flex-start">
        <fx-flex-item
          v-for="index of 10"
          :key="index"
          fx-background="info"
          :width="100"
          :height="100"
          />
      </fx-flex>
    </fx-flex-item>
    <fx-flex-item fx-background="fill-5">
      <fx-flex :gutter="40">
        <fx-flex-item v-for="index in 4" :key="index" fx-background="info">
          <fx-flex :gutter="10" :height="60">
            <fx-flex-item v-for="index in 4" :key="index" fx-background="fill-6"/>
          </fx-flex>
        </fx-flex-item>
      </fx-flex>
    </fx-flex-item>
  </fx-flex>
</template>
