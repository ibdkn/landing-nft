import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Button} from "../../components/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Artist} from "../../components/artist/Artist";
import artistImage1 from "../../assets/images/artists/artist-image-1.png"
import artistImage2 from "../../assets/images/artists/artist-image-2.png"
import artistImage3 from "../../assets/images/artists/artist-image-3.png"
import artistImage4 from "../../assets/images/artists/artist-image-4.png"
import artistImage5 from "../../assets/images/artists/artist-image-5.png"
import avatar1 from "../../assets/images/artists/avatar-1.png"
import avatar2 from "../../assets/images/artists/avatar-2.png"
import avatar3 from "../../assets/images/artists/avatar-3.png"
import avatar4 from "../../assets/images/artists/avatar-4.png"
import avatar5 from "../../assets/images/artists/avatar-5.png"

export const Artists = () => {
    return (
        <StyledArtists>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <SectionTitle>
                    Popular <span>Artists</span>
                    On This Week
                </SectionTitle>
                <Button>See All</Button>
            </FlexWrapper>
            <ArtistsList>
                <Artist src={artistImage1} name={"Osvaldo Percy"} avatar={avatar1}/>
                <Artist src={artistImage2} name={"Ranson Sqiure"} avatar={avatar2}/>
                <Artist src={artistImage3} name={"Cristio leo"} avatar={avatar3}/>
                <Artist src={artistImage4} name={"Sebastian waltan"} avatar={avatar4}/>
                <Artist src={artistImage5} name={"Abraham Zack"} avatar={avatar5}/>
            </ArtistsList>
        </StyledArtists>
    );
};

const StyledArtists = styled.section`
  min-height: 90vh;
  background-color: #000000;
`

const ArtistsList = styled.div`
  display: grid;
  gap: 30px;
  
  //display: flex;
  //justify-content: center;
  //flex-wrap: wrap;
  //gap: 30px;
`
