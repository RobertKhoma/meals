import React, { useEffect, useState } from "react";
import { getAllCategories } from "../App";
import CategoryList from "../components/CategoryList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]); // отфильтрованный каталог
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { pathname, search } = useLocation();
  const push = useNavigate();
  const handelSearch = (str) => {

    push({
      pathname,
      search: `?search=${str}`
    })
    setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())
    ))
  };

  console.log(search);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        //  await new Promise((resolve) => setTimeout(resolve, 5000)); // искусственная задержка
        setError("");
        const data = await getAllCategories();
        setCatalog(data.categories);
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .includes(search.split('=')[1].toLowerCase())
              )
            : data.categories // то будет копироваться все то, что было в изначальном варианте
        );
        setLoading(false)
      } catch (err) {
        setError(err.message || "Не удалось загрузить посты");
      } finally {
        setLoading(false);
      }
    })();
  }, [search]);
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Search handelClick={handelSearch}/>
      {loading ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </div>
  );
}

export default Home;
