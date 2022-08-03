import { useEffect, useState } from "react";
import { getNews } from "../functions/getNews";
import PaginationNews from "./PaginationNews";
import News from "./News";

const NewsList = ({ search }) => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalResults, setTotalResults] = useState(0);
  const [maxResults, setMaxanswerults] = useState(false);

  const setTotalPages = () => {
    if (totalResults % pageSize === 0) {
      return Math.trunc(totalResults / pageSize);
    }
    return Math.trunc(totalResults / pageSize) + 1;
  };

  const totalPages = setTotalPages();

  const getNewsFromAPI = async (search, page, pageSize) => {
    setLoading(true);
    const answer = await getNews(search, page, pageSize);
    setNews(answer.articles);
    setTotalResults(answer.totalResults);
    setMaxanswerults(false);
    if (answer.code === "maximumanswerultsReached") setMaxanswerults(true);
    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    if (search) {
      getNewsFromAPI(search, page, pageSize);
    }
  }, [page, search]);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <News
        page={page}
        news={news}
        pageSize={pageSize}
        totalResults={totalResults}
        maxResults={maxResults}
      />
      <PaginationNews
        page={page}
        setPage={setPage}
        totalResults={totalResults}
        totalPages={totalPages}
        maxResults={maxResults}
        pageSize={pageSize}
      />
    </>
  );
};

export default NewsList;
