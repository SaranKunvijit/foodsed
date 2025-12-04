import React, { useEffect, useState } from 'react'

function Tables() {
const [tableTotal, setTableTotal] =useState(0)
useEffect(() => {
  const num = localStorage.getItem("tableTotal");
  if (num) setTableTotal(Number(num));
}, [])
const tables = Array.from({ length: tableTotal }, (_, i) => i + 1);
  return (
    <div className="btn-table">
      {tables.map((id) => (
        <button key={id} className="table-id">
          โต๊ะ {id}
        </button>
      ))}
    </div>
  )
}

export default Tables
