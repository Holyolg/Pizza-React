import React from "react";
import { useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sorting, { list } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../Pagination/index";

import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/filter/slice";
import { fetchPizzas } from "../redux/pizza/asyncActions";
import { SearchPizzaParams } from "../redux/pizza/types";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const isSearchs = React.useRef(false);
  const isMounted = React.useRef(false);
  // хуки redux
  const dispatch = useAppDispatch();
  // с помощью деструктуризации вытаскиваем categoryId и sort, навешивая на них filter
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);
  const { items, status } = useSelector((state: any) => state.pizza);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onchangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = async () => {
    // консты для запроса пицц
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
        currentPage: String(currentPage),
      })
    );
  };

  // Если изменили параметры и был первый рендер:
  React.useEffect(() => {
    if (isMounted.current) {
      const querryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${querryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  // Если был первый рендер, то проверяет URL-параметры и сохраняет в редуксе
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as SearchPizzaParams;
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);
      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || list[0],
        })
      );
      isSearchs.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем пипцы
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearchs.current) {
      getPizzas();
    }
    isSearchs.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzas = items.map((value: any) => (
    <PizzaBlock key={value.id} {...value} />
  ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sorting />
      </div>
      <h2 className="content__title">Все пипцы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>К сожалению нам не удалось получить пипцы :(</h2>
          <p>Попробуйте повторить попытку снова</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      <Pagination currentPage={currentPage} onPageChange={onchangePage} />
    </div>
  );
};
export default Home;
