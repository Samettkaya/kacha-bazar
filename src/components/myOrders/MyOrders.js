import React, { useEffect } from 'react'
import Table from '../table/Table'


const MyOrders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (

        <div className="overlow-hidden">
      <h2 className="text-xl text-black font-semibold mb-5">My Orders</h2>
      <Table />
    </div>
  )
}

export default MyOrders