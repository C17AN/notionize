import React, { useEffect, useState } from "react";
import Container from "../../components/layout/container";
import ContentContainer from "../../components/layout/contentContainer";
import { getNotionPostsAPI } from "../../lib/api/notion";
import Axios from "../api/notion/axiosInstance";
import Tag from "../../components/common/Tag";
import TagCloud from "../../components/TagCloud";
import Head from "next/head";
import PostContainer from "../../components/post/postContainer";
import PostItem from "../../components/post/postItem";

interface Props {}

const dashboard = ({ metaData, postList }) => {
  const [tagList, setTagList] = useState(
    metaData.properties.tag?.multi_select.options ||
      metaData.properties["태그"]?.multi_select.options
  );

  console.log(tagList);

  return (
    <ContentContainer>
      <>
        <h1 className="text-3xl font-semibold">Chanstar 님의 노션 대시보드</h1>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">태그 목록</h3>
            {process.browser && <TagCloud tagList={tagList} />}
          </div>
          <h3 className="text-xl font-semibold">최근 작성한 글</h3>
          <PostContainer postList={postList} />
        </div>
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
