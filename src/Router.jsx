import {Routes, Route} from 'react-router-dom'
import {Shuffled} from './components/Shuffled'
import {Complete} from './components/Complete'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<></>} />
            <Route path="/shuffled" element={<Shuffled />} />
            <Route path="/complete" element={<Complete />} />
        </Routes>
    )

}