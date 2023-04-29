import Home from "./pages/Home";
import Committees from "./pages/Committees";
import CallForPaper from "./pages/CallForPaper";
import CallForWorkshops from "./pages/CallForWorkshops";
import Venue from "./pages/Venue";
import Dates from "./pages/Dates";

export default function getRoutes() {
    return [
        {
            title: "Home",
            href: "/",
            component: <Home/>,
            menu: true
        },
        {
            title: "Committees",
            href: "/committees",
            component: <Committees />,
            menu: true
        },
        {
            title: "Dates",
            href: "/important-dates",
            component: <Dates />,
            menu: false
        },
        {
            title: "Call for Papers",
            href: "/call-for-papers",
            component: <CallForPaper />,
            menu: true,
            parent: 'Calls'
        },
        {
            title: "Call for Workshops",
            href: "/call-for-workshops",
            component: <CallForWorkshops />,
            menu: true,
            parent: 'Calls'
        },
        {
            title: "Venue",
            href: "/venue",
            component: <Venue />,
            menu: true
        },
    ];
}
