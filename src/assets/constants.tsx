import React from 'react';

import BuildIcon from '@mui/icons-material/Build';
import PlumbingIcon from '@mui/icons-material/Plumbing';
// import ElectricityIcon from '@mui/icons-material/Electricity';
import BrushIcon from '@mui/icons-material/Brush';
import LandscapeIcon from '@mui/icons-material/Landscape';
// import BricksIcon from '@mui/icons-material/Bricks';
import RoofingIcon from '@mui/icons-material/Roofing';
// import WeldingIcon from '@mui/icons-material/Welding';
// import FlooringIcon from '@mui/icons-material/Flooring';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const logo = 'https://static.vecteezy.com/system/resources/previews/001/590/595/original/hammer-tool-icon-cartoon-isolated-free-vector.jpg';

export const skillsWithIcons = [
  {
    id: 1,
    name: 'Carpentry',
    icon: <BuildIcon />,
  },
  {
    id: 2,
    name: 'Plumbing',
    icon: <PlumbingIcon />,
  },
  // {
  //   id: 3,
  //   name: 'Electrical Work',
  //   icon: <ElectricityIcon />,
  // },
  {
    id: 4,
    name: 'Painting',
    icon: <BrushIcon />,
  },
  {
    id: 5,
    name: 'Landscaping',
    icon: <LandscapeIcon />,
  },
  // {
  //   id: 6,
  //   name: 'Masonry',
  //   icon: <BricksIcon />,
  // },
  {
    id: 7,
    name: 'Roofing',
    icon: <RoofingIcon />,
  },
  // {
  //   id: 8,
  //   name: 'Welding',
  //   icon: <WeldingIcon />,
  // },
  // {
  //   id: 9,
  //   name: 'Tiling',
  //   icon: <FlooringIcon />,
  // },
  {
    id: 10,
    name: 'HVAC Technician',
    icon: <AcUnitIcon />,
  },
];

export default skillsWithIcons;
