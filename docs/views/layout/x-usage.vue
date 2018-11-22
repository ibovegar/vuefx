<template>
  <Flex direction="column" :gutter="20">
    <article>
      <Flex>
        <Paper height="40px" width="200px"/>
      </Flex>
      <Flex justify-content="center">
        <Paper height="40px" width="200px"/>
      </Flex>
      <Flex justify-content="flex-end">
        <Paper height="40px" width="200px"/>
      </Flex>
    </article>
    <article>
      <Flex :gutter="30" justify-content="flex-start" wrap="wrap">
        <Paper v-for="index in 10" :key="index" height="100px" width="100px" :elevation="1"/>
      </Flex>
    </article>
    <article>
      <Flex :gutter="10">
        <Paper v-for="index in 3" :key="index"/>
          <Flex :gutter="10">
            <Paper v-for="index in 4" :key="index" height="10px" width="10px"/>
          </Flex>
        </Paper>
      </Flex>
    </article>
  </Flex>
</template>
