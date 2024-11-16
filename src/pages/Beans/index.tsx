import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { BeanCard } from "../../components/BeanCard";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { beansSelector } from "../../Redux/beans/beansSelector";
import { useAppDispatch } from "../../Redux/store";
import "./styles.css";
import { getBeans } from "../../api/beans";
import { Search } from "../../components/Search";
import { Bean } from "../../types";

export const BeansPage = () => {
  const dispatch = useAppDispatch();
  const { data, totalPages, isLoading, isError } = useSelector(beansSelector);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [initialBeans, setInitialBeans] = useState<null | Bean[]>(null);
  const [updateBeans, setUpdateBeans] = useState<null | Bean[]>(null);

  useEffect(() => {
    dispatch(getBeans(page));
  }, [dispatch, page]);

  const load = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      setInitialBeans(data);
      setUpdateBeans(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue) {
      const filteredBeans = initialBeans?.filter((item) =>
        item.flavorName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setUpdateBeans(filteredBeans);
    } else {
      setUpdateBeans(initialBeans);
    }
  }, [searchValue, initialBeans]);
  return (
    <div className="beans_container">
      <h1>Explore All Beans ...</h1>
      <Search setSearchValue={setSearchValue} />
      {isLoading && data.length === 0 ? (
        <Loader />
      ) : (
        <InfiniteScroll
          next={load}
          dataLength={updateBeans ? updateBeans.length : 0}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          {updateBeans &&
            updateBeans.map((item) => (
              <BeanCard
                searchValue={searchValue}
                key={`beans_item_${item.beanId}`}
                data={item}
              />
            ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
