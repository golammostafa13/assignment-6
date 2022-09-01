import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedPageNo } from '../../features/filter/filterSlice';

export default function Page({pageNo}) {
  const dispatch = useDispatch();
  const {pageNo : pNo} = useSelector(state => state.filter);

  const pageNoHandler = (pgNo) => {
      dispatch(selectedPageNo(pgNo));
  }
  let style = ""
  pNo === pageNo ? style = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer" : style = "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <div className={style} onClick={() => pageNoHandler(pageNo)}>
        {pageNo}
    </div>
  )
}
// className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full"