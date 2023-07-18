import Home from "./pages/Home";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import SteeringCommittee from "./pages/SteeringCommittee";
import TechnicalProgramCommittee from "./pages/TechnicalProgramCommittee";
import CallForPaper from "./pages/CallForPaper";
import CallForWorkshops from "./pages/CallForWorkshops";
import Venue from "./pages/Venue";
import Workshops from "./pages/Workshops";
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
            title: "Technical Program Committee",
            href: "/technical-program-committee",
            component: <TechnicalProgramCommittee />,
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
            title: "Workshops",
            href: "/workshops",
            component: <Workshops />,
            menu: true
        },
        {
            title: "Venue",
            href: "/venue",
            component: <Venue />,
            menu: true
        },
        {
            title: "2022",
            href: "https://nsfcac.github.io/UCC2022/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2021",
            href: "https://www.cs.le.ac.uk/events/UCC2021/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2020",
            href: "https://www.cs.le.ac.uk/events/UCC2020/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },   
        {
            title: "2019",
            href: "https://dl.acm.org/doi/proceedings/10.1145/3344341",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2018",
            href: "http://uccbdcat18.cloudlab.zhaw.ch/ucc2018/welcome-to-ucc-2018.html",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2017",
            href: "https://dl.acm.org/doi/proceedings/10.1145/3147213",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2016",
            href: "https://ieeexplore.ieee.org/xpl/conhome/7876288/proceeding",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2015",
            href: "https://cyprusconferences.org/ucc2015",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2014",
            href: "https://ieeexplore.ieee.org/xpl/conhome/7027114/proceeding",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2013",
            href: "https://ieeexplore.ieee.org/xpl/conhome/6733783/proceeding",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },
        {
            title: "2012",
            href: "https://ieeexplore.ieee.org/xpl/conhome/6423131/proceeding",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },    
        {
            title: "2011",
            href: "https://ieeexplore.ieee.org/xpl/conhome/6123165/proceeding",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },    
        {
            title: "2010",
            href: "http://www.manjrasoft.com/ucc2010/",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },  
        {
            title: "Cloud 2010",
            href: "http://www.cloudbus.org/cloud2010/Welcome.html",
            component: null,
            menu: true,
            parent: 'Previous\neditions',
            external: true
        },   
        {
            title: "Privacy Policy",
            href: "/privacy-policy",
            component: <PrivacyPolicy />,
            menu: false
        },
    ];
}
