import { useEffect, useState } from "react";
import { ApiResponse } from "@Types/apiResponse.d";
import { getNEOsInfo } from "@Services/api";
import { NEO } from "@Types/neo.d";
import { BarChart } from "@Components/charts/BarChart";
import { PieChart } from "@Components/charts/PieChart";
import { CardContainer } from "@Components/UI/CardContainer";
import { Loading } from "@Components/UI/Loading";
import { Dropdown } from "@Components/UI/Dropdown";
import "./MainPage.css";

const dropdownOptions = [
  { id: 0, name: "Hidde Filter" },
  { id: 1, name: "by Date" },
  { id: 2, name: "by Name" },
];

export const MainPage = () => {
  const [dateState, setDateState] = useState<string>(getCurrentDateFormatted());
  const [neosInfo, setNeosInfo] = useState<Array<NEO>>();
  const [neosInfoCopy, setNeosInfoCopy] = useState<Array<NEO>>();
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterId, setFilterId] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    cleanFilter();
  }, [filterId]);

  function getCurrentDateFormatted() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const getNEOInfo = (date: string) => {
    setLoading(true);
    getNEOsInfo(date)
      .then((data: ApiResponse | any) => {
        setNeosInfo(data.near_earth_objects[date]);
        setNeosInfoCopy(data.near_earth_objects[date]);
        setTotalRecords(data.element_count);
        setLoading(false);
      })
      .catch((error: Error) => {
        setLoading(false);
        setNeosInfo([]);
        setNeosInfoCopy([]);
        setTotalRecords(0);
        console.error("ERROR", error);
      });
  };

  const filterData = ({ target }: any) => {
    const { value } = target;
    setDateState(value);
    getNEOInfo(value);
  };
  const onInputChange = ({ target }: any) => {
    const { value } = target;
    setInputValue(value);
  };

  const filterByName = (name: string) => {
    if (name.length > 0) {
      const newData = neosInfoCopy?.filter((neo: NEO) =>
        neo.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log("new data", newData);
      setNeosInfo(newData);
      setTotalRecords(newData.length);
    } else {
      setNeosInfo(neosInfoCopy);
      setTotalRecords(neosInfoCopy.length);
    }
  };

  const cleanFilter = () => {
    setDateState(getCurrentDateFormatted());
    setInputValue("");
    getNEOInfo(getCurrentDateFormatted());
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="title-container">
          Near Earth Objects
          <div className="dropdown-container">
            <Dropdown
              title="Filter"
              options={dropdownOptions}
              action={setFilterId}
            />
          </div>
          {filterId == 1 ? (
            <div className="filter-container">
              <input
                type="date"
                id="date"
                value={dateState}
                onChange={filterData}
              />
            </div>
          ) : null}
          {filterId == 2 ? (
            <div className="filter-container">
              <input type="text" value={inputValue} onChange={onInputChange} />
              <button onClick={() => filterByName(inputValue)}>Search</button>
            </div>
          ) : null}
        </div>
      </div>
      {loading ? (
        <CardContainer>
          <Loading />
        </CardContainer>
      ) : (
        <>
          {totalRecords > 0 ? (
            <div className="charts-container">
              <CardContainer title="Distance from Earth (KM)">
                <BarChart data={neosInfo!} />
              </CardContainer>
              <CardContainer title="Estimated Diameter (KM)">
                <PieChart
                  labels={neosInfo?.map((neo: NEO) => neo.name)}
                  data={neosInfo!}
                />
              </CardContainer>
            </div>
          ) : (
            <CardContainer>No Records found!</CardContainer>
          )}
        </>
      )}
    </>
  );
};
