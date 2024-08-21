import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TabPanels from './TabPanels';

function TabComponent() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className=" ms-2 my-3">
            <div className='ms-2 h4'>Tab</div>
            <div>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Page One" />
                    <Tab label="Page Two" />
                    <Tab label="Page Three" />
                </Tabs>
            </div>
            <TabPanels value={value} index={0}>
                Page One
            </TabPanels>
            <TabPanels value={value} index={1}>
                Page Two
            </TabPanels>
            <TabPanels value={value} index={2}>
                Page Three
            </TabPanels>
        </div>



    )
}

export default TabComponent