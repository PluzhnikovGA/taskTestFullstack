import axios from "axios";
import { useEffect, useState } from "react";

export interface IUseContent {
  firstLine?: string,
  number?: string,
  addMeaningToNumber?: string,
  lastLine?: string,
}

export function useContent() {
  const [dataArray, setDataArray] = useState<Array<IUseContent>>([{}])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/content`, {
        headers: {'Content-Type': 'application/json'}
        })
      .then((resp) => {
        const contentData = resp.data.map(
          (item: IUseContent) => ({
            firstLine: item.firstLine,
            number: item.number,
            addMeaningToNumber: item.addMeaningToNumber,
            lastLine: item.lastLine,
          })
        );
        setDataArray(contentData)
      })
      .catch(console.log);
  }, [])

  console.log("content")

  return dataArray;
}
