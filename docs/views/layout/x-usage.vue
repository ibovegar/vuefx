<template>
  <Flex dir="column" :gutter="40">
    <Paper>
      <Flex dir="column" :gutter="30">
        <Paper self="flex-start" fx-background="secondary" width="20%" height="40px"/>
        <Paper self="center" fx-background="secondary" width="20%" height="40px"/>
        <Paper self="flex-end" fx-background="secondary" width="20%" height="40px"/>
      </Flex>
    </Paper>
    <Paper>
      <Flex :gutter="30" justify-content="flex-start" wrap>
        <Paper
          v-for="index in 10"
          :key="index"
          fx-background="secondary"
          width="80px"
          height="80px"
          />
      </Flex>
    </Paper>
    <Paper>
      <Flex :gutter="30" wrap>
        <Paper v-for="index in 3" :key="index">
          <Flex :gutter="20">
            <Paper fx-background="secondary" width="50px" height="20px"/>
            <Paper fx-background="secondary" width="50px" height="20px"/>
            <Paper fx-background="secondary" width="50px" height="20px"/>
          </Flex>
        </Paper>
      </Flex>
    </Paper>
  </Flex>
</template>
