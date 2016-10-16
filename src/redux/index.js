import {Provider} from 'react-redux'
import store from './store'

export default ({children}) =>
    <Provider store={store}>
        {React.Children.only(children)}
    </Provider>
