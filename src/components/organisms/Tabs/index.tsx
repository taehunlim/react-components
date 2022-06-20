import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Tab from "../../atoms/Tab";
import useTabs from "../../hooks/useTabs";

function Tabs({ onChange, defaultActiveKey, children, ...props }) {
    const nonTabElements = children.filter((element, i) => element.type.name !== "Tab");
    if(nonTabElements.length)  throw "Tabs component children should be Tab component"

    //첫번째 탭
    const defaultContent = children[0].props.children;
    const ref = useRef(null);

    const [currentTabWidth, setCurrentTabWidth] = useState(0);
    const [activeBarLeft, setActiveBarLeft] = useState(0);
    const [currentTabContent, setCurrentTabContent] = useState(defaultContent);
    const { currentItem, changeItem } = useTabs(defaultActiveKey, children);

    useEffect(() => {
        const current = ref.current;
        if (current) {
            setCurrentTabWidth(current.firstChild.offsetWidth);
        }
    }, [ref])

    function handleActiveKey(activeKey) {
        changeItem(activeKey);
        onChange(activeKey);
    };

    function handleActiveBar(e) {
        const { left, width } = e.target.getBoundingClientRect();
        setCurrentTabWidth(width);
        setActiveBarLeft(left);
    };


    return (
        <React.Fragment>
            <TabWrapper ref={ ref } { ...props }>
                { children && children.map((child, i) => {
                    const { activeKey, tabName, children } = child.props;
                    const isActive = currentItem === activeKey;
                    return (
                        <Tab
                            key={ i }
                            activeKey={ activeKey }
                            isActive={ isActive }
                            tabName={ tabName }
                            onClick={ (e) => {
                                handleActiveKey(activeKey);
                                handleActiveBar(e);
                                setCurrentTabContent(children);
                            } }
                        />
                    )
                }) }
                <ActiveBar
                    width={ currentTabWidth }
                    left={ activeBarLeft }
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

const ActiveBar = styled.div`
  position: absolute;
  z-index: 99;
  width: ${ props => props.width }px;
  left: ${ props => props.left}px;
  height: 3px;
  background-color: ${({theme}) => theme.fg.primary};
  transition: width 0.3s ease-out, left 0.3s ease-out;
  bottom: 0;
`;

Tabs.propTypes = {
    defaultActiveKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
        props: PropTypes.shape({
            children: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ])
        })
    }))
};

Tabs.Tab = Tab;


export default Tabs;
