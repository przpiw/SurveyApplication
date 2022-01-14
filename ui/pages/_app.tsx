import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ProvideAuth } from '../hooks/useAuth'
import { NextPageContext } from 'next/types'
import withRedux from 'next-redux-wrapper'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import { wrapper } from "../redux/store"

// interface AppContext extends NextPageContext{
//   store:Store
// }

function MyApp({ Component, pageProps }: AppProps) {
  
  return <Provider store={store}><ProvideAuth>
    <Component {...pageProps} /></ProvideAuth>
</Provider>
}



export default wrapper.withRedux(MyApp)
