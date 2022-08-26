const URL = "https://jsonplaceholder.typicode.com/comments?postId=1";

export const getComments = async () => {
  const data = await fetch(URL);
  const comments = await data.json();
  return comments;
};

export default function StaticGen(props) {
  const { comments } = props;

  if (!comments) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>This is all about some dummy content</h1>
      <p>
        Hey! Follow{" "}
        <a href="https://www.linkedin.com/company/codinsofteng/">
          Codin at linkedin:
        </a>{" "}
      </p>
      <h2>Random Comments:</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <span>User: {comment.email} Said:</span>
            <div>{comment.body}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const comments = await getComments();

  return {
    props: { comments },
  };
}
