import React from "react";
import ContentContainer from "../layout/contentContainer";

interface Props {}

const what = (props: Props) => {
  return (
    <ContentContainer>
      <>
        <h1 className="text-3xl font-bold my-3">What is Notionize?</h1>
        <p className="text-gray-600">
          Notionize는 블로그가 아닌 노션에 기록을 남기시는 분들을 위한 서비스입니다.
          <br />
          튜토리얼을 마치면, 여러분이 작성한 글의 통계와 함께 다른 분들의 글을 확인할 수 있게
          됩니다.
        </p>
      </>
    </ContentContainer>
  );
};

export default what;
