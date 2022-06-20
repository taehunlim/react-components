import React from 'react';
import styled from "@emotion/styled";

interface TabProps extends StyledTabProps, React.ComponentProps<'div'> {
    activeKey?: string;
    tabName: string;
};

interface StyledTabProps {
    isActive?: boolean;
};

const Tab = ({ isActive, activeKey, tabName, ...props}: TabProps) => {
    return (
        <StyledTab isActive={isActive} {...props}>
            {tabName}
        </StyledTab>
    );
};


const StyledTab = styled.div<StyledTabProps>`
  position: relative;
  text-align: center;
  //3px = activeBar height
  padding-bottom: calc(20px - 3px);
  background-color: transparent;
  color: ${
    ({ isActive, theme }) => isActive ? theme.fg.black : theme.fg.gray
  };
  transition: color 250ms ease-out;

  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
`;

export default Tab;
