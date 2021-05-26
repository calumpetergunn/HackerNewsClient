function NewsListItem({ title, by, score, url, kids, onCommentButtonClick }) {
  
  const commentButtonClicked = () => {
    onCommentButtonClick(kids)
  }
  
  return (
    <>
      <a href={url}><p>{title}</p></a>
      <p>by: {by}</p>
      <p>score: {score}</p>
      <button onClick={commentButtonClicked}>Show Comment</button>
    </>
  );
}

export default NewsListItem;
