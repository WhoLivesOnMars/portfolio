/* eslint-disable */
import { BiCodeAlt, BiServer, BiPaint } from "react-icons/bi";
import { Gi3DStairs } from "react-icons/gi";
import { BsCursor } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { FaSearch, FaTasks, FaLaptopCode } from "react-icons/fa";



export const servicesData = [
    {
        id: 1,
        title: 'Développement Front-end',
        icon: <BiCodeAlt/>
    },
    {
        id: 2,
        title: 'Développement Back-end',
        icon: <BiServer /> 
    },
    {
        id: 3,
        title: 'Web Design',
        icon: <FaLaptopCode /> 
    },
    {
        id: 4,
        title: 'Design graphique',
        icon: <BiPaint />
    },
    {
        id: 5,
        title: 'Modélisation 3D',
        icon: <Gi3DStairs />
    },
    {
        id: 6,
        title: 'UX',
        icon: <BsCursor />
    },
    {
        id: 7,
        title: 'SEO',
        icon: <FaSearch />
    },
    {
        id: 8,
        title: 'Stratégie de contenu',
        icon: <RiArticleLine />
    },
    {
        id: 9,
        title: 'Gestion de projet',
        icon: <FaTasks />
    }
]