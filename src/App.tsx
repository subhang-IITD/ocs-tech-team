
import './App.css'
import { Button } from "@/components/ui/button"
import Login from './Login'

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from './components/mode-toggle'


function App() {
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
      <ModeToggle />
      <Login />
      
      
    </div>
    </ThemeProvider>
  )
};




export default App
