import {configureStore} from '@reduxjs/toolkit'
import countRedux from './count/countRedux'

export default configureStore({
    reducer: {
        counter: countRedux
    }
})
