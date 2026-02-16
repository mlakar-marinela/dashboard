import type { ReactElement } from "react"
import { render } from "vitest-browser-react"
import { Provider } from "react-redux"
import store from "../state_management/store"

export function renderWithProvider(ui: ReactElement) {
  return render(
    <Provider store={store}>
      {ui}
    </Provider>
  )
}