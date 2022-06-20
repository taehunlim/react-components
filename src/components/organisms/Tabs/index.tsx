import React, {
    useState,
    useEffect,
    useRef,
    ReactNode,
    ReactElement,
} from 'react';
import styled from "@emotion/styled";

import Tab from "../../atoms/Tab";
import useTabs from "../../../hooks/useTabs"

interface TabsProps {
    onChange: (activeKey: string) => void;
    defaultActiveKey: string;
    children: ReactNode
}

interface ActiveBarProps {
    width: number;
    left: number;
}

function Tabs({onChange, defaultActiveKey, children, ...props}: TabsProps) {
    const childrenArray = React.Children.toArray(children);
    const nonTabElements = childrenArray.filter((element: ReactElement) => {
        return element.type !== Tab
    });

    // Stmts: 2.64
    if (nonTabElements.length) throw "Tabs component children should be Tab component";

    const json = childrenArray.map((child: ReactElement) => ({
        activeKey: child.props.activeKey
    }));

    //첫번째 탭
    const defaultContent = (childrenArray[0] as ReactElement).props.children;

    const ref = useRef<HTMLDivElement>(null);

    const [currentTabWidth, setCurrentTabWidth] = useState(0);
    const [activeBarLeft, setActiveBarLeft] = useState(0);
    const [currentTabContent, setCurrentTabContent] = useState(defaultContent);
    const {currentItem, changeItem} = useTabs(defaultActiveKey, json);

    useEffect(() => {
        const current = ref.current,
            firstChild = current!.firstChild as HTMLElement

        setCurrentTabWidth(firstChild.offsetWidth);
    }, [ref])

    function handleActiveKey(activeKey: string) {
        changeItem(activeKey);
        onChange(activeKey);
    };

    function handleActiveBar(e: React.MouseEvent<HTMLDivElement>) {
        const target = e.target as HTMLElement,
            targetParent = target.parentElement;

        const {left, width} = target.getBoundingClientRect();
        const {left: parentLeft} = targetParent!.getBoundingClientRect();

        setCurrentTabWidth(width);
        setActiveBarLeft( left - parentLeft);
    };

    return (
        <React.Fragment>
            <TabWrapper ref={ref} {...props}>
                {childrenArray.map((child: ReactElement, i) => {
                    const {activeKey, tabName, children} = child.props;
                    const isActive = currentItem === activeKey;
                    return (
                        <Tab
                            key={i}
                            isActive={isActive}
                            tabName={tabName}
                            onClick={(e) => {
                                handleActiveKey(activeKey);
                                handleActiveBar(e);
                                setCurrentTabContent(children);
                            }}
                        />
                    )
                })}
                <ActiveBar
                    width={currentTabWidth}
                    left={activeBarLeft}
                />
            </TabWrapper>
            <div>
                {currentTabContent}
            </div>
        </React.Fragment>
    );
};

const TabWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  position: relative;
`;

const ActiveBar = styled.div<ActiveBarProps>`
  position: absolute;
  z-index: 99;
  width: ${props => props.width}px;
  left: ${props => props.left}px;
  height: 3px;
  background-color: ${({theme}) => theme.fg.primary};
  transition: width 0.3s ease-out, left 0.3s ease-out;
  bottom: 0;
`;


Tabs.Tab = Tab;


export default Tabs;
