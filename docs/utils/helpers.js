const compiler = require('vue-template-compiler')

export function splitComponent (sfc) {
  const parsed = compiler.parseComponent(sfc)

  return {
    template: parsed.template.content || null,
    script: parsed.script ? parsed.script.content : null,
    style: parsed.styles.length ? parsed.styles[0].content : null
  }
}

export default {
  splitComponent
}
