import TTCard from "../TTCard/TTCard";

import styles from "./Row.module.css";

const TTRow = ({ ttreviews, handleAddToWishlist, profile }) => {
  return (
    <div className={styles.row}>
      {ttreviews.map((ttreview, i) => (
        <TTCard
          ttreview={ttreview}
          key={i}
          handleAddToWishlist={handleAddToWishlist}
          profile={profile}
        />
      ))}
      {/* <TTCard ttreviews={ttreviews}/> */}
    </div>
  );
};

export default TTRow;
