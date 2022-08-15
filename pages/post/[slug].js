import ReadersNav from '../../components/ReadersNav';
import Recommendations from '../../components/Recommendations';
import ArticleMain from '../../components/ArticleMain';
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import { MediumContext } from "../../context/MediumContext";

const styles = {
  wrapper: ``,
  content: `flex`,
};

const Post = () => {

  const { posts, users} = useContext(MediumContext);
  const router = useRouter();
  const [post, setPost] = useState([])
  const [author, setAuthor] = useState([])

  useEffect(() => {
    if(posts.length === 0) {
      return
    }

    console.log(router.query.slug);

    setPost(posts.find(post => post.id === router.query.slug))

    // console.log((users.find((user) => user.id === post?.data?.author)));
    setAuthor(users.find(user => user.id === post?.data?.author))
  }, [post])

    return (
      <div className={styles.content}>
        <ReadersNav></ReadersNav>
        <ArticleMain post={post} author={author} />
        <Recommendations></Recommendations>
      </div>
    );
}

export default Post;