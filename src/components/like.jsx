import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as ThumbsUpRegular } from "@fortawesome/free-regular-svg-icons/";
import { faThumbsUp as ThumbsUpSolid } from "@fortawesome/free-solid-svg-icons/";

const Like = ({ like, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer", color: "yellow" }}>
      <FontAwesomeIcon
        style={{ color: "yellow" }}
        icon={like ? ThumbsUpSolid : ThumbsUpRegular}
        size="3x"
      />
    </div>
  );
};

export default Like;
