import React from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  display: flex;
  gap: 1rem;
  align-items: start;
  padding: 1rem;
  position: relative;
`;
const ProfileImage = styled.img`
  height: 50px;
`;

const Name = styled.h4`
  color: ${({ theme }) => theme.color.text.color};
  transition: 1s color ease;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.text.hover};
  }
`;

const NameContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 1000px){
    flex-flow: column;
  }
`;

const UserContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-flow: column;
`;

const Message = styled.p`
  color: ${({ theme }) => theme.color.notificationMessage.message};
`;

const PostMessage = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.color.notificationMessage.message};

  &:hover {
    transition: 1s color ease;
    color: ${({ theme }) => theme.color.notificationMessage.post};
    cursor: pointer;
  }
`;

const Time = styled.p`
  color: ${({ theme }) => theme.color.notificationMessage.message};
`;

const PrivateMessage = styled(Time)`
  padding: 1rem;
  border: 1px solid rgba(147, 157, 174, 0.5);
  border-radius: 3px;
  transition: 1s background-color ease;
  margin-top: .5rem;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.privateMessage};
  }
`;

const Picture = styled.img`
  height: 60px;
`;
const PictureContainer = styled.div`
 position: absolute;
 right: 1rem;
`;

// notificationMessage

export default function Post({
  image,
  name,
  message,
  postMessage,
  time,
  privateMessage,
  picture,
}) {
  return (
    <StyledPost>
      <ProfileImage src={image} />
      <UserContainer>
        <NameContainer>
          <Name>{name}</Name>
          <Message>
            {message}
            <PostMessage> {postMessage}</PostMessage>
          </Message>
        </NameContainer>
        <Time>{time}</Time>
        {privateMessage && (
          <>
            <PrivateMessage>{privateMessage}</PrivateMessage>
          </>
        )}
      </UserContainer>
      {picture && (
        <PictureContainer>
          <Picture src={picture} />
        </PictureContainer>
      )}
    </StyledPost>
  );
}
