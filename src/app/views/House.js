import React from "react";
import { InfoText, Loader, Title, CharacterParent } from "app/components";
import { useParams } from "react-router-dom";
import { useGetHouseQuery } from "app/services/modules/houses";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetHouseQuery(id);

  return (
    <div className="content">
      <Loader loading={isLoading} />
      <Title title={data?.name || "Loading..."} back />
      <div className="card mb-2 width-50 center f-center">
        <div className="spacer" />

        <InfoText title="Region" subtitle={data?.region} />
        <InfoText title="Coat of Arms" subtitle={data?.coatOfArms} />
        <InfoText title="Words" subtitle={data?.words} />
        <InfoText title="Titles" subtitle={data?.titles.join(", ")} />
        <InfoText title="Seats" subtitle={data?.seats.join(", ")} />
        <InfoText title="Founded" subtitle={data?.founded} />
        <InfoText title="Died Out" subtitle={data?.diedOut} />
        <CharacterParent id={data?.currentLord} title="Current Lord" />

        <CharacterParent id={data?.heir} title="Heir" />
        <CharacterParent id={data?.overlord} title="Overlord" />
        <CharacterParent id={data?.founder} title="Founder" />

        <div className="divider" />
      </div>
    </div>
  );
};

export default Page;
