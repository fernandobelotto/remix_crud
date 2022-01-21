import { Link } from "remix";

export default function Index() {
  return (
    <>
      <h1>Remix crud example</h1>
      <Link to={'/posts'}>posts</Link>
    </>
  );
}
