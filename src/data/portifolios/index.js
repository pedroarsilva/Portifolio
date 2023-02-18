// 2:26:50
import uuid from "react-uuid";
import { eye, git } from "../../utils/icons";
import snippet2 from '../../img/portImages/snippet2.png';
import tabs2 from '../../img/portImages/tabs2.png';
import js from '../../img/portImages/js.png';
import figma2 from '../../img/portImages/figma2.png';

export const portfolios = [
    {
        id: uuid(),
        category: "Web Development",
        title: "Figm landing page design",
        image: snippet2,
        link1: "https://www.github.com/pedroarsilva",
        link2: "https://www.github.com/pedroarsilva",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Game Development",
        title: "React portfolio website",
        image: tabs2,
        link1: "https://www.github.com/pedroarsilva",
        link2: "https://www.github.com/pedroarsilva",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Development",
        title: "React portfolio website",
        image: js,
        link1: "https://www.github.com/pedroarsilva",
        link2: "https://www.github.com/pedroarsilva",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "UI/UX Design",
        title: "React portfolio website",
        image: figma2,
        link1: "https://www.github.com/pedroarsilva",
        link2: "https://www.github.com/pedroarsilva",
        icon1: git,
        icon2: eye,
    },
]