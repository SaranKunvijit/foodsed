import './Tables.css'
type TablesProps = {
  tableTotal: number
}
function Tables({ tableTotal }: TablesProps) {
  // const [tableTotal, setTableTotal] =useState(0)

  const tables = Array.from({ length: tableTotal }, (_, i) => i + 1);
  return (
    <div className="container-table">
       <div className="btn-tables">
      {tables.map((id) => (
        <div className="table-boxs"> 
        <button key={id} className="table-id">
          โต๊ะ {id}
        </button></div>

      ))}
    </div>
    </div>
   
  )
}

export default Tables
