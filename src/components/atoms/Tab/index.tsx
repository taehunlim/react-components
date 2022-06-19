import React from 'react';
import styled from "@emotion/styled";
import {Theme} from "@emotion/react";

interface TabProps extends StyledTabProps{
    activeKey: string;
    tabName: string
};

interface StyledTabProps {
    isActive: boolean;
    theme: Theme
};

const Tab = ({ isActive, activeKey, tabName, ...props}: TabProps) => {
    return (
        <StyledTab isActive={activeKey ? true : false} {...props}>
            {tabName}
        </StyledTab>
    );
};

const tabColor = ({ isActive, theme }: StyledTabProps) => isActive ? theme.fg.black : theme.fg.gray;

const StyledTab = styled.div`
  position: relative;
  text-align: center;
  //3px = activeBar height
  padding-bottom: calc(20px - 3px);
  background-color: transparent;
  color: ${tabColor};
  transition: color 250ms ease-out;

  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
`;

export default Tab;
