import React from 'react'
import { Provider } from 'react-redux'
import {store} from '/components/store.jsx'
import Main from "/components/Main.jsx"
import '/src/style/style.css'
export default function index() {
  return (
    <>
    <Provider store={store}>
        <Main/>
    </Provider>
    </>
  )
}
