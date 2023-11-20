import { useEffect } from 'react'

const useSetDetails = ({ setCurGroup, setCurOrder }) => {
  useEffect(() => {
    if (localStorage.getItem("grouping")) {
      setCurGroup(localStorage.getItem("grouping"));
    }
     else {
      setCurGroup("status");
    }

    if (localStorage.getItem("ordering")) {
      setCurOrder(localStorage.getItem("ordering"));
    } else {
      setCurOrder("priority");
    }
    
  }, [localStorage.getItem("grouping")]);
}

export default useSetDetails;