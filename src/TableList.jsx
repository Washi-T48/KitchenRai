const TableList = ({ tables_id, number, location, capacity, reserved }) => {
    console.log("ANAL?");
    console.log(tables_id, number, location, capacity, reserved);
    return (
        <div className="grid-item" id={tables_id} title={location}>
            {number}
        </div>
    );
}

export default TableList;