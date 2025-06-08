import BlogList from '../components/blog/blogListing'
import Pagehead from "../commonComponents/meta";
const BlogListPage = () => {
  return (
    <>
      <Pagehead
        title="Blog-List"
        description="Explore the latest blog details and insights on technology, development, and more."
      />
     <BlogList/> 
    </>
  )
}

export default BlogListPage
