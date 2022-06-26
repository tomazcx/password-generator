import './style.css'
import { Header } from './components/Header'
import { Router } from './Router'

export const App = () => {
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <Router />
        </div>

    )
}