import React from "react";
import { videos } from "../../data/data";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";

export function Home() {
    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoGrid videos={videos} />
        </FlexContainer>
    );
}
