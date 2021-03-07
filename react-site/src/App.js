import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

const GET_BLOG_POST = gql`
{
  blog_posts(first: 5) {
    uid
    datetime
    title
    content
    comment {
      user
      content
    }
  }
}`


function App() {
  const { data, wip, fail } = useQuery(GET_BLOG_POST);
  if (wip) return <p>Loading</p>;
  if (fail) return <p>Fail</p>;
  return (
    <div>
    <h2>a blog</h2>
    {data && data.blog_posts && data.blog_posts.map((post, idx) => (
      <div key={idx}>
        <h2>data.title</h2>
        <h2>data.datetime</h2>
        <p>data.content</p>
      </div>
    ))}
    </div>
  )
}

export default App;
