import ReadersNav from '../../components/ReadersNav';
import Recommendations from '../../components/Recommendations';
import ArticleMain from '../../components/ArticleMain';

const styles = {
  wrapper: ``,
  content: `flex`,
};

const Post = () => {
    return (
      <div className={styles.content}>
        <ReadersNav></ReadersNav>
        <ArticleMain></ArticleMain>
        <Recommendations></Recommendations>
      </div>
    );
}

export default Post;