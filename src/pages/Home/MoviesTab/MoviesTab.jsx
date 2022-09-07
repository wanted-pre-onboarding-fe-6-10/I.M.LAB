import { useState } from 'react';
import styled from 'styled-components';
import NowPlayingList from './NowPlayingList';

const MoviesTab = () => {
  const [focus, setFocus] = useState(0);

  return (
    <Box>
      <Tabs>
        <Tab
          id="now-playing-tab"
          href="/nowplaying"
          focused={focus === 0}
          onMouseEnter={() => setFocus(0)}
        >
          Now Playing
        </Tab>
        <Tab
          id="top-rated-tab"
          href="/toprated"
          focused={focus === 1}
          onMouseEnter={() => setFocus(1)}
        >
          Top Rated
        </Tab>
        <Tab
          id="upcoming-tab"
          href="/upcoming"
          focused={focus === 2}
          onMouseEnter={() => setFocus(2)}
        >
          Upcoming
        </Tab>
        {/* <Tab onClick={() => navigate({ path: '/#prod_detail_review', search: '?idx=123' })}> */}
      </Tabs>
      {focus === 0 && <NowPlayingList />}
      {focus === 1 && <NowPlayingList />}
      {focus === 2 && <NowPlayingList />}
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Tab = styled.a`
  text-decoration: solid;
  /* color: ${props => props.theme.textColor}; */
  color: gray;

  font-size: large;
  font-weight: 300;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  &:hover {
    background-color: ${props => props.theme.subBgColor};
    color: white;
  }
  ${props =>
    props.focused &&
    ` font-weight: 600;
      color: white;
  `}
`;

const SeeMoreButton = styled.div``;

export default MoviesTab;
