import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { postId } = useParams();
  const apiurl = 'https://jsonplaceholder.typicode.com/posts/' + postId;

  const [post, setPost] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        const apiurluser =
          'https://jsonplaceholder.typicode.com/users/' + data.userId;
        fetch(apiurluser)
          .then((response) => response.json())
          .then((user) => setUser(user));
      });
  }, [apiurl]);

  return (
    <div className='p-6'>
      <Link to={'/'} className='btn btn-primary'>
        {`<--`} kembali
      </Link>

      {post ? (
        <div className=''>
          <h4 className='font-bold text-5xl'>{post.title}</h4>
          <div>ditulis oleh : {user?.name}</div>
          <p className='py-4'>{post.body}</p>
          <div className='flex justify-between'>
            <Link
              to={`/detail/${parseInt(postId) - 1}`}
              className='btn btn-primary'
            >
              Prev page
            </Link>
            <Link
              to={`/detail/${parseInt(postId) + 1}`}
              className='btn btn-primary'
            >
              Next page
            </Link>
          </div>
        </div>
      ) : (
        <>Loading data</>
      )}
    </div>
  );
};

export default PostDetail;
