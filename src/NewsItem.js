import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, source, description, Imageurl, newsurl, author, date } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            className="card-img-top"
            src={
              !Imageurl
                ? "https://t3.ftcdn.net/jpg/04/29/42/42/360_F_429424279_dokEFwnSoJeOKpqvV1ttXum8piESsF5L.jpg"
                : Imageurl
            }
            alt={title}
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'85%', zIndex:'1'}}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-outline-primary"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
