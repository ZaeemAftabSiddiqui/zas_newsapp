import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-05-10&sortBy=publishedAt&apiKey=8156b324bd974a02936a2357b2bfef10&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-05-10&sortBy=publishedAt&apiKey=8156b324bd974a02936a2357b2bfef10&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2022-05-10&sortBy=publishedAt&apiKey=8156b324bd974a02936a2357b2bfef10&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h1>ZasGisNews - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="conatainer d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            onClick={this.handlePrevClick}
            className="btn btn-dark "
          >
            &larr; previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
