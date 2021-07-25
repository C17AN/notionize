import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

interface Props {}

const tagCloudColors = ["#293B5F", "#47597E", "#DBE6FD", "#B2AB8C", "#87A7B3"];

const TagCloud = ({ tagList }) => {
  const words = tagList.map((tag) => ({ text: tag.name, value: 10 }));
  console.log(words);
  return (
    <ReactWordcloud
      words={words}
      minSize={[200, 320]}
      size={[400, 300]}
      options={{ fontFamily: "inter", colors: tagCloudColors }}
    />
  );
};

export default TagCloud;
