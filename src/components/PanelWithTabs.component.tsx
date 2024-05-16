/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabProps {
  label: string;
  content: React.ReactNode;
}

interface PanelWithTabsProps {
  tabs: TabProps[];
}

function CustomTabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function PanelWithTabs({ tabs }: PanelWithTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{
      backgroundColor: 'white', marginLeft: '10%', marginRight: '10%', pl: '2%', pr: '2%',
    }}
    >
      <Box sx={{
        borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 5, zIndex: 1, backgroundColor: '#fff',
      }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
        >
          {tabs.map((tab, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tab label={tab.label} {...a11yProps(index)} key={index} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ overflowY: 'scroll', overflowX: 'auto', height: '90vh' }}>
        {tabs.map((tab, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CustomTabPanel value={value} index={index} key={index}>
            {tab.content}
          </CustomTabPanel>
        ))}
      </Box>
    </Box>
  );
}
