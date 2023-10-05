import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import EditorMain from "./components/WebEditor/EditorMain"
import Programming from './components/Programming/Programming'
import Home from './components/Home/Home'
import { RouterProvider } from 'react-router-dom'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='web' element={<EditorMain/>}/>
      <Route path='programming' element={<Programming/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
