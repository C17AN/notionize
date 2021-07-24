import React, { useEffect } from "react";
import Container from "../../components/layout/container";
import ContentContainer from "../../components/layout/contentContainer";
import { getNotionPostsAPI } from "../../lib/api/notion";
import Axios from "../api/notion/axiosInstance";

interface Props {}

const dashboard = ({ metaData, postList }) => {
  console.log(metaData, postList);
  let tagList =
    metaData.properties.tag?.multi_select.options ||
    metaData.properties["태그"]?.multi_select.options;

  console.log(tagList);

  return (
    <ContentContainer>
      <>
        <h1 className="text-3xl font-semibold">Chanstar 님의 노션 대시보드</h1>
        <h3 className="text-xl font-semibold">태그 목록</h3>
        {tagList.map((tag) => (
          <div key={tag.id}>{tag.name}</div>
        ))}
        <div>컨테이너</div>
      </>
    </ContentContainer>
  );
};

export const getServerSideProps = async (req, res) => {
  const metaData = await Axios.get("/");
  const postList = await Axios.post("/query");
  return {
    props: {
      metaData: metaData.data,
      postList: postList.data.results,
    },
  };
};

export default dashboard;
