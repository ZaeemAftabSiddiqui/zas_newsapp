import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger ">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://s2.glbimg.com/lU1QKIyaus4u4BxgHzIxxoSpe7g=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/K/K/nhFs4jQom3wZTA3GVK6g/watts-1-.jpeg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="-blank" className="btn btn-sm btn-dark">
            Read News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
