import React, { useEffect, useState } from "react";

const userData = new Array(25);
let count = 1;
for (let i = 0; i < userData.length; i++) {
  userData[i] = count;
  count++;
}
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const indexOfLastItem = itemPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  const arrToPrint = userData.slice(indexOfFirstItem, indexOfLastItem);

  const next = () => {
    setCurrentPage(currentPage + 1);
  };
  const previous = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {arrToPrint.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>
        </div>
      ))}
      <div>
        <button onClick={previous}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Home;
