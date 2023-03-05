import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import CounterReducer from "../redusers/Counter"




    function StoreProvider({children}) {
       
    let store = configureStore({
        reducer:{
            CounterReducer
        }
    })
    return (
   <>
        <Provider store={store}>
            {children}
        </Provider>
   </>
  )
}

export default StoreProvider