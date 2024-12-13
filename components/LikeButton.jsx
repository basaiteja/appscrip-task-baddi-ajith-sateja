
import { useState } from 'react';
import styles from './LikeButton.module.css'; 

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button className={styles.likeButton} onClick={toggleLike}>
      {liked ? (
        <span className={styles.liked}>❤️</span> 
      ) : (
        <span className={styles.unliked}>🤍</span> 
      )}
    </button>
  );
};

export default LikeButton;
