import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = () => {
  const apiurl = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className='h-72 flex justify-center items-center'>
        <h1 className='font-bold text-5xl'>ini halaman list post</h1>
      </div>
      <div className='gap-8 p-6 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {posts.map((post) => (
          <div key={post.id} className='card bg-base-300'>
            <div className='card-body'>
              <h2 className='card-title'>{post.title}</h2>
              <p className='py-4'>{post.body}</p>
              <div className='card-actions'>
                <Link to={'/detail/' + post.id} className='btn btn-primary'>
                  pergi ke detail halaman {`-->`}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
