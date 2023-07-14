import React from "react";
import styles from "./FeedPhotosItem.module.css";
import Image from "../Interface/Image";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    if (photo) setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
