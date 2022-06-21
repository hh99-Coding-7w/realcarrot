import React from "react";

const DrupDown = ({ setLocation, Location }) => {
  const selectList = [
    "강남구",
    "강동구",
    "강북구",
    "강서구",
    "관악구",
    "광진구",
    "구로구",
    "금천구",
    "노원구",
    "도봉구",
    "동대문구",
    "동작구",
    "마포구",
    "서대문구",
    "서초구",
    "성동구",
    "성북구",
    "송파구",
    "양천구",
    "영등포구",
    "용산구",
    "은평구",
    "종로구",
    "종구",
    "중랑구",
  ];

  const handleSelect = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div>
      <h3 style={{marginBottom:"1rem",marginTop:"1rem"}}>서울특별시</h3>
      <div>
        <select onChange={handleSelect} value={Location}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <h4 style={{marginBottom:"1rem"}}>
          지역: <b>{Location}</b>
        </h4>
      </div>
    </div>
  );
};

export default DrupDown;
