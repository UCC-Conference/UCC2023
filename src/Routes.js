import Home from "./pages/Home";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import SteeringCommittee from "./pages/SteeringCommittee";
import CallForPaper from "./pages/CallForPaper";
import CallForWorkshops from "./pages/CallForWorkshops";
import Venue from "./pages/Venue";
import Dates from "./pages/Dates";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function getRoutes() {
    return [
        {
            title: "Home",
            href: "/",
            component: <Home/>,
            menu: true
        },
        {
            title: "Organizing Committee",
            href: "/organizing-committee",
            component: <OrganizingCommittee />,
            menu: true,
            parent: 'Committees'
        },
        {
            title: "Steering Committee",
            href: "/steering-committee",
            component: <SteeringCommittee />,
            menu: true,
            parent: 'Committees'
        },
        {
            title: "Dates",
            href: "/important-dates",
            component: <Dates />,
            menu: true
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
        {
            title: "Privacy Policy",
            href: "/privacy-policy",
            component: <PrivacyPolicy />,
            menu: false
        },
    ];
}
