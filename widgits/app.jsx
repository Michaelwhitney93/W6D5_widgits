import React from 'react';
import Tab from './frontend/tabs';
import Clock from './frontend/clock.jsx';



const tabProps = [{ title: 'one', content: 'I am One' }, { title: 'two', content: 'I am Two' }, { title: 'three', content: 'I am Three' }];
const App = (props) => {
    return (
        <>
            <Clock/> 
            <Tab tabProps={tabProps}/>
        </>
    )
};

export default App;