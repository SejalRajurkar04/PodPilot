import React from 'react'
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const Card = styled.div`
    height: 260px;
    width: 260px;
    background-color: #1E1E1E; /* Darker tone for a sleek look */
    padding: 1.5rem;
    border-radius: 1rem; /* Smoother edges */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); /* Soft shadow */
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px); /* Slight lift effect */
    }
`;

const PodcastName = styled.div`
    color: ${({ theme }) => theme.text_primary || "#FFFFFF"};
    margin-top: 1rem;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
`;

const PodcastDescription = styled.div`
    color: ${({ theme }) => theme.text_secondary || "#B0B0B0"};
    margin-top: 0.6rem;
    font-size: 1rem;
    text-align: center;
    line-height: 1.4;
`;

export const SearchCard = () => {
  return (
    <Card>
        <Avatar
          src='https://imgs.search.brave.com/ehz2Uo5e7s5vqThA4x8MHLLd-td3CpvouiLDGFQnVJg/rs:fit:500:500:1/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDE5/NzA4ODg4My11emcz/YWEtdDUwMHg1MDAu/anBn'
          alt='Eminem picture'
          sx={{
            width: 90, 
            height: 90, 
            border: "3px solid #FFFFFF", 
            boxShadow: "0 0 12px rgba(255, 255, 255, 0.3)"
          }}
        /> 
        <PodcastName>
            Eminem
        </PodcastName>
        <PodcastDescription>
            Hello, I am Eminem
        </PodcastDescription>
    </Card>
  )
}
