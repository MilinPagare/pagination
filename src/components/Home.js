import React, { useEffect, useState } from "react";

const userData = new Array(105);
let count = 1;
for (let i = 0; i < userData.length; i++) {
  userData[i] = count;
  count++;
}
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(5);
  const [pageLimit, setPageLimit] = useState(5);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const arr = userData.slice(indexOfFirstItem, indexOfLastItem);
  const pages = [];
  for (let i = 1; i <= Math.ceil(userData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const next = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > max) {
      setMax(currentPage + max);
      setMin(currentPage);
    }
  };
  const previous = () => {
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 <= min) {
      setMax(currentPage - 1);
      setMin(min - pageLimit);
    }
  };

  const jumpPage = (item) => {
    setCurrentPage(item);
  };

  const first = () => {
    setCurrentPage(1);
    setMax(5);
    setMin(0);
  };

  const last = () => {
    setCurrentPage(Math.ceil(userData.length / itemsPerPage));
    setMin(Math.ceil(userData.length / itemsPerPage) - max);
    setMax(Math.ceil(userData.length / itemsPerPage));
  };

  return (
    <>
      {arr.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      {currentPage === 1 ? (
        <>
          <button disabled={true}>First</button>
          <button disabled={true}>Prev</button>
        </>
      ) : (
        <>
          <button onClick={first}>First</button>
          <button onClick={previous}>Prev</button>
        </>
      )}

      {pages.map((item, index) => {
        if (item > min && item <= max) {
          return (
            <button
              key={index}
              onClick={() => {
                jumpPage(item);
              }}
            >
              {item}
            </button>
          );
        }
      })}
      {currentPage === Math.ceil(userData.length / itemsPerPage) ? (
        <>
          <button disabled={true}>Next</button>
          <button disabled={true}>Last</button>
        </>
      ) : (
        <>
          <button onClick={next}>Next</button>
          <button onClick={last}>Last</button>
        </>
      )}
    </>
  );
};

export default Home;
