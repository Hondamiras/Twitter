import {Dashboard, Teachers, Students, Settings, Billing, Exams, NotFound, Features} from "../Pages/Dashboard/pages"
import { PATH } from '../hooks/usePath.jsx'
import { Login, Register } from "../Pages/Registiration"
import { HomeIcon, ExploreIcon, NotificationIcon, MessagesIcon, BookmarksIcon, ListIcon, ProfileIcon} from "../assets/Logos/icons.jsx"
export const dashboardRouteList = [
    {
        id:1,
        path:PATH.home,
        element:<Dashboard/>,
        children:[]
    },
    {
        id:2,
        path:PATH.teachers,
        element:<Teachers/>,
        children:[]
    },
    {
        id:3,
        path:PATH.students,
        element:<Students/>,
        children:[]
    },
    {
        id:4,
        path:PATH.billing,
        element:<Billing/>,
        children:[]
    },
    {
        id:5,
        path:PATH.settings,
        element:<Settings/>,
        children:[]
    },
    {
        id:6,
        path:PATH.exams,
        element:<Exams/>,
        children:[]
    },
    
    {
        id:7,
        path:PATH.features,
        element:<Features/>,
        children:[]
    },
    {
        id:8,
        path:PATH.notFound,
        element:<NotFound/>,
        children:[]
    }
]

export const registirationRoutes = [
    {
        id:1,
        path:PATH.home,
        element:<Login/>,
        children:[]
    },
    {
        id:2,
        path:PATH.register,
        element:<Register/>,
        children:[]
    },
]

export const navbarList = [
    {
        id:1,
        title:"Dashboard",
        path:PATH.home,
        icon:<HomeIcon active={false}/>,
        activeIcon:<HomeIcon active={true}/>
    },
    {
        id:2,
        title:"Teachers",
        path:PATH.teachers,
        icon:<ExploreIcon active={false}/>,
        activeIcon:<ExploreIcon active={true}/>,
    },
    {
        id:3,
        title:"Students",
        path:PATH.students,
        icon:<NotificationIcon active={false}/>,
        activeIcon:<NotificationIcon active={true}/>,
    },
    {
        id:4,
        title:"Billing",
        path:PATH.billing,
        icon:<MessagesIcon active={false}/>,
        activeIcon:<MessagesIcon active={true}/>,
    },
    {
        id:5,
        title:"Settings",
        path:PATH.settings,
        icon:<BookmarksIcon active={false}/>,
        activeIcon:<BookmarksIcon active={true}/>,
    },
    {
        id:6,
        title:"Exams",
        path:PATH.exams,
        icon:<ListIcon active={false}/>,
        activeIcon:<ListIcon active={true}/>,
    },
    {
        id:7,
        title:"Features",
        path:PATH.features,
        icon:<ProfileIcon active={false}/>,
        activeIcon:<ProfileIcon active={true}/>,
    }
]
