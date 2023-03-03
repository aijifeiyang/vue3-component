import type { App } from 'vue'
import * as components from './components'

// eslint-disable-next-line import/export
export * from './components'

export default {
  install: (app: App) => {
    for (const key in components) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const comp = components[key]
      if (comp.install)
        app.use(comp)
    }
    return app
  },
}
