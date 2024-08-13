import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Settings from './pages/Settings.tsx'
import Layout from './components/Layouts/Layout.tsx'
import LogsDashboard from './pages/Logs.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/home" Component={Home}/>
        <Route path="/settings" Component={Settings}/>
        <Route path="/logs" Component={LogsDashboard}/>
        </Route>
      </Routes>
  </HashRouter>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
