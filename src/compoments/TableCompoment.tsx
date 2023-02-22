import React from 'react';
import { Table } from 'antd';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

interface TableProps {
  columns: DataType[];
  data: DataType[]
}


const TableCompoment: React.FC<TableProps> = (props: TableProps) => {
  return (
    <Table columns={props.columns} dataSource={props.data} />
  )
};

export default TableCompoment;