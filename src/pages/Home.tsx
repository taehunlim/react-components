import React, {useState} from 'react';

import Tabs from "../components/organisms/Tabs";

const Home = () => {
    const [currentTab, setCurrentTab] = useState("first");

    return (
        <div style={{margin: "8px"}}>
            <Tabs
                defaultActiveKey={currentTab}
                onChange={(activeKey) => setCurrentTab(activeKey)}
            >
                <Tabs.Tab activeKey="first" tabName="잉">
                    121
                </Tabs.Tab>
                <Tabs.Tab activeKey="second" tabName="잉엥">
                    2323
                </Tabs.Tab>
                <Tabs.Tab activeKey="test" tabName="잉엥옹옹">
                    3434
                </Tabs.Tab>
            </Tabs>
        </div>
    );
};

export default Home;