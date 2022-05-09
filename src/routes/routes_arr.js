import {lazy} from 'react'
export default [

    {
        path:'/',
        component:() => lazy(() => import('../layout/mainLayout')),
        children:[
            {
                path:'helloWorld',
                exact:true,
                component:() =>  lazy(()=>import('../modules/HelloWorld/App'))
            },
            {
                path:'tickClock',
                component:() =>  lazy(()=>import('../modules/TickClock/App'))
            },
            {
                path:'users',
                component:() =>  lazy(()=>import('../modules/Users/views/index'))
            }
        ]
    }
]