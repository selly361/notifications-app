import React, { useState } from "react";
import Post from "../Post/Post";
import styled from "styled-components";
import { ReactComponent as Sun } from "../../assets/images/icon-sun.svg";
import { ReactComponent as Moon } from "../../assets/images/icon-moon.svg";

import {
  mark,
  angela,
  anna,
  jacob,
  kimberly,
  nathan,
  rizky,
  picture,
} from "../../assets/images";

const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  padding-left: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  min-height: 80vh;
  width: max-content;
  background-color: ${({ theme }) => theme.color.notifArea.bg};
  margin: auto;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.color.notifArea.boxShadow};
  padding: 1rem;
  transition: 2s background-color ease;
  display: flex;
  flex-flow: column;
  gap: 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    padding: 2rem;
   
  }

  @media (max-width: 480px){
    padding: 2rem .5rem;
    min-height: 100vh;

  }
`;

const Header = styled.section`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.heading.color};
  transition: 2s color ease;
  display: flex;
  align-items: center;

  @media (max-width: 466px){
    font-size: 1.5rem;
  }
`;

const Length = styled.span`
  background-color: hsl(219, 85%, 26%);
  font-size: 0.65em;
  color: hsl(0, 0%, 100%);
  padding: 4px 12px;
  border-radius: 7px;
  text-align: center;
  margin-left: 10px;
`;

const MarkAsRead = styled.button`
  display: block;
  color: ${({ theme }) => theme.color.text.color};
  transition: 1s color ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.text.hover};
  }
`;

const Posts = styled.div`
  height: max-content;
  display: flex;
  flex-flow: column;
  gap: 3rem;
`;

const Notifications = ({ theme, setTheme }) => {
  const [unread, setUnread] = useState([
    "Mark Webber",
    "Angela Gray",
    "Jacob Thompson",
  ]);

  return (
    <Container>
      <Header>
      <ThemeButton
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </ThemeButton>
        <Title>
          Notifications <Length>{unread.length}</Length>
        </Title>
        <MarkAsRead onClick={() => setUnread([])} as="p">
          Mark all as read
        </MarkAsRead>
      </Header>
      <Posts>
        <Post
          image={mark}
          name="Mark Webber"
          time="1m ago"
          message="reacted to your recent post"
          postMessage="My first tournament today!"
          unread={unread}
          setUnread={setUnread}
        />

        <Post
          image={angela}
          name="Angela Gray"
          time="5m ago"
          message="followed you"
          unread={unread}
          setUnread={setUnread}
        />
        <Post
          image={jacob}
          name="Jacob Thompson"
          time="1 day ago"
          message="has joined your group"
          group="Chess Club"
          unread={unread}
          setUnread={setUnread}
        />
        <Post
          image={rizky}
          name="Rizky Hasanuddin"
          time="5 days ago"
          message="sent you a private message"
          privateMessage={
            <>
              Hello, thanks for setting up the Chess Club. I've been a member
              for a<br />
              few weeks now and I'm already having lots of fun and improving my
              game.
            </>
          }
        />
        <Post
          image={kimberly}
          name="Kimberly Smith"
          time="1 week ago"
          message=" commented on your picture"
          picture={picture}
        />
        <Post
          image={nathan}
          name="Jacob Thompson"
          time="2 weeks ago"
          message="reacted to your recent post"
          postMessage="5 end-game strategies..."
        />
        <Post
          image={anna}
          name="Jacob Thompson"
          time="2 weeks ago"
          message="left the group😥"
          group="Chess Club"
        />
      </Posts>
    </Container>
  );
};

export default Notifications;
