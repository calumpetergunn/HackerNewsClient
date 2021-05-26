function NewsListItem({ title, by, score, url }) {
  return (
    <>
      <a href={url}>{title}</a>
      <p>by: {by}</p>
      <p>score: {score}</p>
    </>
  );
}

export default NewsListItem;
