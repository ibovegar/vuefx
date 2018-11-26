<template>
  <table class="component-api-table">
    <tr>
      <th v-for="(column, index) in columns" :key="index">{{ columns[index] }}</th>
    </tr>
    <tr v-for="prop in data" :key="prop.name">
      <td v-for="(column, index) in columns" :key="index" v-html="prop[column]"/>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array
  }
}
</script>

<style>
.component-api-table {
  border-collapse: collapse;
  width: 100%;
  color: var(--color--font-2);

  u {
    border-bottom: 1px solid var(--color--border-4);
    background-color: var(--color--fill-4);
    text-decoration: none;
    white-space: pre;
    font-family: monospace;
    letter-spacing: -1px;
    padding: 0 5px;
    font-weight: var(font-weight--medium);
    @mixin font-size 13;
  }

  th {
    border-bottom: 2px solid var(--color--border-2);
    color: var(--color--font-3);
    font-weight: var(--font-weight--regular);
    text-transform: capitalize;
    @mixin font-size 12;

    &:first-child {
      padding-left: 8px;
    }

    &:last-child {
      text-align: right;
      padding-right: 8px;
    }
  }

  td {
    border-bottom: 1px solid var(--color--border-2);

    &:first-child {
      padding-left: 8px;
      color: var(--color--alert);
      font-weight: var(--font-weight--medium);
    }
    &:last-child {
      text-align: right;
      padding-right: 0;
      padding-right: 8px;
    }
  }

  td, th {
    text-align: left;
    padding: 20px 0;
    padding-right: 20px;
  }
}
</style>
