import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPostById, fetchUserById } from "../../api";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.state?.postId;

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) {
      setError("Post not found.");
      setLoading(false);
      return;
    }

    fetchPostById(postId)
      .then(res => {
        setPost(res.data);
        return fetchUserById(res.data.userId);
      })
      .then(r => setUser(r.data))
      .catch(() => setError("Something went wrong while loading the blog post."))
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) return <p className="mt-12 text-center">Loading...</p>;

  
  if (error) return <p className="mt-12 text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl p-6 mx-auto mt-40 border rounded shadow mb-44">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 mb-4 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back to Blog List
      </button>

      <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
      
      <p className="mb-6 text-gray-700 whitespace-pre-line">{post.body}</p>

      <div className="flex items-center pt-6 mt-8 border-t">
        <img
          src={`https://robohash.org/${user.id}.png?size=80x80`}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-20 h-20 mr-5 border rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/80?text=User";
          }}
        />
        <div>
          <p className="text-lg font-semibold">{user.firstName} {user.lastName}</p>
          <p className="text-sm text-gray-600">Email: {user.email}</p>
          <p className="text-sm text-gray-600">Phone: {user.phone}</p>
          {user.company && <p className="text-sm text-gray-600">Company: {user.company.name}</p>}
          {/* Add more user details if needed */}
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        <p>Post ID: {post.id}</p>
        <p>User ID: {post.userId}</p>
        {/* If you had publish date or other metadata, add here */}
      </div>
    </div>
  );
};

export default BlogDetail;
