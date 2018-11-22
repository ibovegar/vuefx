<template>
  <div id="app"><!--:theme="selectedTheme"-->
    <Select
      label="Selected fruits"
      transition="slide-down"
      :options="types"
      v-model="selectedTypes"
      multiple
      />
    <Dropdown
      v-model="selectedTypes"
      multiple
      >
      <button slot="trigger">Preferences</button>
      <DropdownItem v-for="type of types" :key="type.value" :value="type.value">
        {{ type.name }}
      </DropdownItem>
    </Dropdown>
    <Badge :value="5" :offset-x="-9" :offset-y="-6" raised>
      <button>LOREM IPSUM</button>
    </Badge>
    <Popover>
      <button slot="trigger">Inherit width</button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </Popover>
    <Chip raised>Apple</Chip>
    <ChipGroup>
      <Chip raised>Apple</Chip>
      <Chip raised>Apple</Chip>
    </ChipGroup>
    <Tabs v-model="currentTab">
      <div slot="Template">Lorem ipsum</div>
      <div slot="Javascript">Dolor</div>
      <div slot="Stylesheet">Sit amet</div>
    </Tabs>
    <Vmenu v-model="selectedItem">
      <VmenuCategory value="lorem ipsum dolor" label="lorem ipsum dolor" expanded>
        <VmenuTopic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
      </VmenuCategory>
      <VmenuCategory value="ncididunt ut labore" label="ncididunt ut labore"/>
    </Vmenu>

    <!--fx-select
      label="Selected fruits"
      transition="slide-down"
      :options="types"
      v-model="selectedTypes"
      multiple
      />
    <fx-dropdown
      v-model="selectedTypes"
      multiple
      >
      <button slot="trigger">Preferences</button>
      <fx-dropdown-item v-for="type of types" :key="type.value" :value="type.value">
        {{ type.name }}
      </fx-dropdown-item>
    </fx-dropdown>
    <fx-badge :value="5" :offset-x="-9" :offset-y="-6" raised>
      <button>LOREM IPSUM</button>
    </fx-badge>
    <fx-popover>
      <button slot="trigger">Inherit width</button>
      <div class="wrapper"><p>Inherit width of trigger</p></div>
    </fx-popover>
    <fx-chip raised>Apple</fx-chip>
    <fx-chip-group>
      <fx-chip raised>Apple</fx-chip>
      <fx-chip raised>Apple</fx-chip>
    </fx-chip-group>
    <fx-tabs v-model="currentTab">
      <div slot="Template">Lorem ipsum</div>
      <div slot="Javascript">Dolor</div>
      <div slot="Stylesheet">Sit amet</div>
    </fx-tabs>
    <fx-vmenu v-model="selectedItem">
      <fx-vmenu-category value="lorem ipsum dolor" label="lorem ipsum dolor" expanded>
        <fx-vmenu-topic value="consectetur adipiscing elit" label=" consectetur adipiscing elit"/>
      </fx-vmenu-category>
      <fx-vmenu-category value="ncididunt ut labore" label="ncididunt ut labore"/>
    </fx-vmenu-->


    <!--app-top/>
    <div class="content-wrapper">
      <app-left/>
      <main class="app-center">
        <router-view></router-view>
      </main>
      <app-right/>
    </div-->
  </div>
</template>

<script>
import AppLeft from './components/app-left'
import AppTop from './components/app-top'
import AppRight from './components/app-right'

export default {
  name: 'app',

  components: { AppLeft, AppRight, AppTop },

  data () {
    return {
      selectedItem: '',
      selectedTypes: [],
      currentTab: 'Template',
      types: [
        { name: 'Apple', value: 'fruit_1' },
        { name: 'Banana', value: 'fruit_2' },
        { name: 'Orange', value: 'fruit_3' },
        { name: 'Kiwi', value: 'fruit_4' }
      ]
    }
  }
}
</script>

<style>
#app {
  --width--app-left: 16%;
  --width--app-right: 12%;

  height: 100vh;

  .content-wrapper {
    display: flex;
  }

  .app-center {
    flex: 1;
    min-width: 0;
    padding: 0 10px;

    @media (min-width: 1600px) {
      padding: 0 140px;
      padding-top: 80px;
    }
  }
}
</style>
