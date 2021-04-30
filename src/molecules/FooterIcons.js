import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TwitterIcon from '../atoms/TwitterIcon';
import FacebookIcon from '../atoms/FacebookIcon';
import YoutubeIcon from '../atoms/YoutubeIcon';
import QiitaIcon from '../atoms/QiitaIcon';
import GitOctIcon from '../atoms/GitOctIcon';

const UnorderedList = styled.ul.attrs((props) => {})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 10px;
`;

const ListItem = styled.li.attrs((props) => {})`
  margin-right: 16px;
`;

const QiitaBorder = styled.div.attrs((props) => {
  return {
    style: {
      border: `2px solid ${props.color}`,
    },
  };
})`
  border-radius: 10px;
  height: 11px;
  padding: 5px 6px;
  margin-top: 3px;
`;

const FooterIcons = (props) => {
  const { color } = props;
  return (
    <UnorderedList>
      <ListItem>
        <a href="#">
          <QiitaBorder color={color}>
            <QiitaIcon color={color} />
          </QiitaBorder>
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <TwitterIcon color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <FacebookIcon color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <YoutubeIcon color={color} />
        </a>
      </ListItem>
      <ListItem>
        <a href="#">
          <GitOctIcon color={color} />
        </a>
      </ListItem>
    </UnorderedList>
  );
};

FooterIcons.propTypes = {
  color: PropTypes.string,
};

FooterIcons.defaultProps = {
  color: '#586069',
};

export default FooterIcons;
