import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PwIcon from '../atoms/PwIcon';
import SummaryDetails from '../molecules/SummaryDetails';
import DetailsTest from '../molecules/DetailsTest';

const StartDiv = styled.div`
  display: flex;
  margin: 0;
  position: relative;
`;

const HeaderItem = styled.div`
  margin: 12px 16px;
  align-self: stretch;
`;

const HeaderLink = styled.a.attrs((props) => {
  return {
    href: '#',
    dataHotkey: 'g d',
    ariaLabel: 'Homepage',
    dataGaClick: 'Header, go to dashboard, icon:logo',
  };
})`
  font-weight: 600;
  color: '#fffff';
  white-space: nowrap;
`;

const Sd1 = SummaryDetails;
const Sd2 = SummaryDetails;

const HeaderComStart = (props) => {
  return (
    <StartDiv>
      <HeaderItem>
        <HeaderLink />
        <PwIcon size={45} color="#8b8c8e" />
      </HeaderItem>
      <DetailsTest
        summaryLabel="Details"
        someLink={[
          {
            link: '#',
            linkLabel: 'Link α',
          },
          {
            link: '#',
            linkLabel: 'Link β',
          },
          {
            link: '#',
            linkLabel: 'Link γ',
          },
        ]}
      />
    </StartDiv>
  );
};

export default HeaderComStart;
