import Article from "./Article";

const ArticleList = ({ Articles }) => {
    return (
      <main>
        {Articles.map((article, index) => (
          <Article key={index} title={article.title} date={article.date} preview={article.preview} />
        ))}
      </main>
    );
  };

  export default ArticleList