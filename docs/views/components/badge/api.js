export default [
  {
    props: [
      {
        name: 'placeholder',
        type: '<i>string</i>',
        values: '—',
        default: '<code class="tag">undefined</code>',
        description: 'Default text'
      },
      {
        name: 'multiple',
        type: '<i>boolean</i>',
        values: '—',
        default: '<code class="tag">false</code>',
        description: 'Enables selection of multiple elements'
      },
      {
        name: 'disabled',
        type: '<i>boolean</i>',
        values: '—',
        default: '<code class="tag">false</code>',
        description: 'Disables the reference element'
      },
      {
        name: 'hide-label',
        type: '<i>boolean</i>',
        values: '—',
        default: '<code class="tag">false</code>',
        description: 'Hides the label'
      },
      {
        name: 'hide-label-focused',
        type: '<i>boolean</i>',
        values: '—',
        default: '<code class="tag">false</code>',
        description: 'Hides the label only when focused'
      },
      {
        name: 'transition',
        type: '<i>string</i>',
        values: '<code class="tag">slide-down</code> <code class="tag">scale-top-left</code> <code class="tag">fade</code>',
        default: '<code class="tag">slide-down</code>',
        description: 'Specifies the dropdown animation'
      },
      {
        name: 'auto-width',
        type: '<i>boolean</i>',
        values: '—',
        default: '<code class="tag">false</code>',
        description: 'Dropddown fits inner content'
      },
      {
        name: 'show-checkbox',
        type: '<i>boolean</i>',
        values: '—',
        default: '<code class="tag">false</code>',
        description: 'Display a checkbox in each row'
      },
      {
        name: 'value',
        type: '<i>string</i> <i>array</i>',
        values: '—',
        default: '<code class="tag">undefined</code>',
        description: 'Currently selcted item(s)'
      },
      {
        name: 'options',
        type: '<i>array</i>',
        values: '—',
        default: '<code class="tag">undefined</code>',
        description: 'Dropdown items'
      },
      {
        name: 'theme',
        type: '<i>string</i>',
        values: '<code class="tag">material</code> <code class="tag">boxed</code>',
        default: '<code class="tag">material</code>',
        description: 'Specifies reference element look and feel'
      }
    ],
    events: [
      {
        name: 'input',
        description: 'Triggers when an item has been selected/deselected',
        Value: '<code class="tag">String</code> <code class="tag">Array</code>'
      }
    ],
    methods: [
      {
        name: 'trubadur',
        description: 'Lorem ipsum dolor sit amet',
        Value: '<i>string</i>'
      }
    ]
  }
]
