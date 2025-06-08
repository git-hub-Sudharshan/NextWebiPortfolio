import React, { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../../api";
import { Link } from "react-router-dom";
import slugifyTitle from "../../utils/slugify";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetchPosts().then(res => setPosts(res.data.posts));
    fetchUsers().then(res => {
      const userMap = {};
      res.data.users.forEach(user => (userMap[user.id] = user));
      setUsers(userMap);
    });
  }, []);

  return (
    <div className="max-w-4xl p-6 mx-auto mt-12">
      <h1 className="mb-8 text-3xl font-bold">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map(post => {
          const slug = slugifyTitle(post.title); // use slugifyTitle here
          return (
            <div key={post.id} className="p-5 transition border rounded shadow hover:shadow-lg">
              <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
              <p className="mb-4 text-gray-700">{post.body.slice(0, 100)}...</p>
              {users[post.userId] && (
                <div className="flex items-center mb-4">
                  <img
                    src={`https://robohash.org/${post.userId}.png?size=50x50`}
                    alt={users[post.userId].firstName}
                    className="w-10 h-10 mr-3 rounded-full"
                  />
                  <span className="font-medium">
                    {users[post.userId].firstName} {users[post.userId].lastName}
                  </span>
                </div>
              )}
              <Link
                to={`/blog/${slug}`}
                state={{ postId: post.id }} // Pass post ID via state
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
