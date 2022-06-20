import {Dispatch, SetStateAction, useState} from 'react';

interface ReturnTypes {
    currentItem: string,
    changeItem: Dispatch<SetStateAction<string>>
}

function useTabs<T extends {activeKey: string}> (initialTab: string, allTabs: T[]): ReturnTypes {
    if(!allTabs && !Array.isArray(allTabs)) throw ""
    const [currentIdx, setCurrentIdx] = useState(initialTab);

    const currentTab = allTabs.filter((tab: T) => tab.activeKey === currentIdx);
    return {
        currentItem: currentTab[0].activeKey,
        changeItem: setCurrentIdx
    };
}

export default useTabs;
