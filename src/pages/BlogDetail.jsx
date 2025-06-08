
import PostDetail from '../components/blog/blogDetails'
import Pagehead from "../commonComponents/meta";
const BlogDetail = () => {
  return (
    <>
     <Pagehead
        title="Blog-Details"
        description="Explore the latest blog details and insights on technology, development, and more."
      />
      <PostDetail/>
    </>
  )
}

export default BlogDetail
