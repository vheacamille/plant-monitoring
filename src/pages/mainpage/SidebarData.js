import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as HiIcons from 'react-icons/hi'


export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
        title: 'All Plants',
        path: '/allPlants',
        icon: <GiIcons.GiPlantSeed />,
        cName: 'nav-text'
      },
      {
        title: 'Water Level',
        path: '/waterLevel',
        icon: <GiIcons.GiWaterDrop />,
        cName: 'nav-text'
      },
      {
        title: 'Light Meter',
        path: '/lightMeter',
        icon: <HiIcons.HiLightBulb />,
        cName: 'nav-text'
      }
]