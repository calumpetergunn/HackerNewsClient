import CommentListItem from './CommentListItem';

function CommentsList({ selectedComments }) {
  if (!selectedComments){
    return <p>No comments selected</p>;
  }
  
  const CommentNode = selectedComments.map((comment) => {
    return <CommentListItem text={comment.text} by={comment.by} />;
  });

  return <>{CommentNode}</>;
}

export default CommentsList;
