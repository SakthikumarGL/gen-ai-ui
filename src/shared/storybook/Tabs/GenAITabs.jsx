import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const GenAITabs = (props) => (
  <Tabs value={props.value} onChange={props.onChange} aria-label="genAItabs">
    {React.Children.toArray(
      props.tabs.map((obj) => (
        <Tab
          disableRipple={props.disableRipple}
          label={obj.label}
          {...a11yProps(obj)}
        />
      ))
    )}
  </Tabs>
);

export default GenAITabs;
