export default [
  {
    props: [
      {
        name: 'placeholder',
        type: '<i>String</i>',
        values: '—',
        default: '<u>undefined</u>',
        description: 'Default text'
      },
      {
        name: 'multiple',
        type: '<i>Boolean</i>',
        values: '—',
        default: '<u>false</u>',
        description: 'Enables selection of multiple elements'
      },
      {
        name: 'disabled',
        type: '<i>Boolean</i>',
        values: '—',
        default: '<u>false</u>',
        description: 'Disables the reference element. Lorem ipsum dolor sit amt.'
      },
      {
        name: 'hide-label',
        type: '<i>String, Boolean</i>',
        values: '—',
        default: '<u>false</u>',
        description: 'Hides the label'
      },
      {
        name: 'hide-label-focused',
        type: '<i>Boolean</i>',
        values: '—',
        default: '<u>false</u>',
        description: 'Hides the label only when focused'
      },
      {
        name: 'transition',
        type: '<i>String',
        values: '<code class="tag">slide-downscale</code> <code class="tag">top-left</code> <code class="tag">fade</code>',
        default: '<u>slide-down</u>',
        description: 'Specifies the dropdown animation'
      }
    ],
    events: [
      {
        name: 'input',
        value: 'String | Array',
        description: 'Triggers when an item has been selected/deselected'
      }
    ],
    methods: [
      {
        name: 'trubadur',
        value: 'String',
        description: 'Lorem ipsum dolor sit amet'
      }
    ]
  }
]
