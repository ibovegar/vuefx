<template>
  <section>
    <Paper height="300px">
      <Flex :gutter="30" height="100%">
        <FlexItem self="flex-end">
          <Paper :height="120" :width="80" fx-background="warning"/>
        </FlexItem>
        <FlexItem :width="200" :height="100" self="center">
          <Paper height="100%" fx-background="warning"/>
        </FlexItem>
        <FlexItem flex="1">
          <Paper :height="80" fx-background="warning"/>
        </FlexItem>
      </Flex>
    </Paper>
  </section>
</template>
