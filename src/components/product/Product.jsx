import React, { useState } from "react";
import star from "../../assets/star.png";
import { useGetProductsQuery } from "../../context/api/productApi";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Pagination,
} from "@mui/material";
import SkeletonPage from "../skeleton/SkeletonPage";
import "./Product.css";

const Product = () => {
  const [pageCount, setPageCount] = useState(
    +localStorage.getItem("page") || 6
  );
  const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1);
  const { data, isFetching } = useGetProductsQuery({ limit: pageCount, page });

  let totalPagination = data?.data?.count
    ? Math.ceil(data.data.count / pageCount)
    : 0;

  let productItems = data?.data?.products?.map((el) => (
    <div key={el.id} className="product__card">
      <img className="product__card__img" src={el.urls[0]} alt="product__img" />
      <div className="product__content">
        <h2 className="product__card__text">{el.title}</h2>
        <img src={star} alt="product__star" />
        <div className="product__prices">
          <s className="product__price1">${el.oldPrice}</s>
          <p className="product__price2">${el.price}</p>
        </div>
      </div>
    </div>
  ));

  const handleChangePagination = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page-count", value);
  };

  const handleChangePage = (e) => {
    let value = e.target.value;
    setPageCount(value);
    localStorage.setItem("page", value);
    let result = Math.ceil((page * pageCount) / value);
    setPage(result);
    sessionStorage.setItem("page-count", result);
  };

  return (
    <div>
      <section id="product" className="product">
        <div className="container">
          <h4 className="product__title">Find your favourite smart watch.</h4>
          <h1 className="product__text">Our Latest Products</h1>
          <div className="product__cards">
            {isFetching ? <SkeletonPage pageCount={pageCount} /> : productItems}
          </div>
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
          >
            <Box sx={{ width: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pages</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Pages"
                  value={pageCount}
                  onChange={handleChangePage}
                >
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Stack spacing={2}>
                <Pagination
                  onChange={handleChangePagination}
                  page={page}
                  count={totalPagination}
                  color="primary"
                />
              </Stack>
            </Box>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Product;
