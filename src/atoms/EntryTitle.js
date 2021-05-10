import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ScheduleIcon from './ScheduleIcon';
import EntryKeyword from '../atoms/EntryKeyword';

const DateType = styled.div.attrs((props) => {
  return {
    style: {
      fontSize: `${props.dateSize}px`,
    },
  };
})`
  color: #787878;
  font-weight: 300;
  letter-spacing: 0.2em;
  margin-left: 5px;
  text-align: center;
`;

const EntryLink = styled.a.attrs((props) => {
  return {
    href: `${props.link}`,
  };
})`
  color: #787878;
  display: inline-block;
  text-decoration: none;
  margin: 10px;
`;

const EntryHeadline = styled.div.attrs((props) => {
  return {
    style: {
      fontSize: `${props.titleSize}px`,
      position: `${props.position}`,
    },
  };
})`
  align-items: center;
  color: #787878;
  display: flex;
  flex-direction: column;
  font-family: 'source-code-pro';
  font-weight: 600;
  margin: 20px;
  padding: 8px;
  text-align: center;
`;

const EntrySpan = styled.span.attrs((props) => {})`
  align-items: center;
  display: inline-flex;
  margin-top: 5px;
`;

const EntryTitle = (props) => {
  return (
    <EntryHeadline titleSize={props.titleSize} position={props.position}>
      <EntryLink link={props.link}>{props.title}</EntryLink>
      <EntryKeyword
        keywords={props.keywords}
        margin={props.margin}
        width={props.width}
      />
      <EntrySpan>
        {props.dateSize > 12 && (
          <ScheduleIcon color={'#787878'} height={16} width={16} />
        )}
        <DateType dateSize={props.dateSize}>{props.date}</DateType>
      </EntrySpan>
    </EntryHeadline>
  );
};

EntryTitle.propTypes = {
  date: PropTypes.string,
  dateSize: PropTypes.number,
  titleSize: PropTypes.number,
  keywords: PropTypes.array,
  link: PropTypes.string,
  title: PropTypes.string,
  margin: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.number,
};

EntryTitle.defaultProps = {
  date: 'xxxx-xx-xx',
  dateSize: 12,
  titleSize: 25,
  keywords: ['テスト', 'ブログ', 'test', 'blog', 'microcms'],
  link: '#',
  title: 'Entry Title',
  margin: '10px 7px 2px',
  position: 'static',
  width: 800,
};

export default EntryTitle;
