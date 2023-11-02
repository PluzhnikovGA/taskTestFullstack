import axios from "axios";
import { useEffect, useState } from "react";

export interface IUseMenu {
  menu?: string,
  route?: string,
}

export function useMenu() {
  const [dataArray, setDataArray] = useState<Array<IUseMenu>>([{}])

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/menu`, {
        headers: {'Content-Type': 'application/json'}
        })
      .then((resp) => {
        const menuData = resp.data.map(
          (item: IUseMenu) => ({
            menu: item.menu,
            route: item.route
          })
        );
        setDataArray(menuData)
      })
      .catch(console.log);
  }, [])

  console.log("menu")

  return dataArray;
}
