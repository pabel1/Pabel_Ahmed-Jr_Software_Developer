import React, { useEffect, useState } from "react";

import axios from "axios";
import Loading from "./Loading";
import Table from "./Table";
import Heading from "./Heading";

const CustomeTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiRequest();
    postApiRequest();
    albumsApiRequest();
    setLoading(false);
  }, []);

  const apiRequest = async () => {
    try {
      setLoading(true);
      const resData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      return setSearchData(resData.data);
    } catch (error) {
      setError(error);
    }
  };

  //   posts api fetching
  const postApiRequest = async () => {
    try {
      setLoading(true);

      const resDataPost = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return setPostData(resDataPost.data);
    } catch (error) {
      setError(error);
    }
  };

  //   albums api fetching
  const albumsApiRequest = async () => {
    try {
      setLoading(true);

      const resDataPost = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );

      return setAlbumsData(resDataPost.data);
    } catch (error) {
      setError(error);
    }
  };

  //   searching
  const handleSearch = async () => {
    try {
      setLoading(true);
      const resData = await axios.get(
        `https://jsonplaceholder.typicode.com/users?q=${searchValue}`
      );

      setSearchData(resData.data);
      setSearchValue("");
      setLoading(false);
    } catch (error) {
      return setError(error);
    }
  };
  const handleChange = async (e) => {
    setSearchValue(e.target.value);
    // const filterData= searchData.filter(
    //   (value) =>
    //     value.name.toLowerCase().includes(searchValue) ||
    //     value.email.toLowerCase().includes(searchValue) ||
    //     value.company.name.toLowerCase().includes(searchValue)
    // );

    // return setSearchData(filterData);

    try {
      const resData = await axios(
        `https://jsonplaceholder.typicode.com/users?q=${searchValue}`
      );

      setSearchData(resData.data);
    } catch (error) {
      return setError(error);
    }
  };

  return (
    <>
      <div
        className=" w-[80%] overflow-hidden md:bg-white md:shadow-lg mx-auto
      mt-14 rounded-md"
      >
        {loading && <Loading loading={loading} />}

        <Heading
          searchValue={searchValue}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
        <Table
          searchData={searchData}
          postData={postData}
          albumsData={albumsData}
          error={error}
        />
      </div>
    </>
  );
};

export default CustomeTable;
