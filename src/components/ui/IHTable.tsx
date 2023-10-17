"use client";
import { Button, Table } from "antd"

const IHTable = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            // sorter: true
            sorter:(a:any,b:any)=>a.age - b.age
        },
        {
            title: 'Action',
            render:function(data:any){
                return <Button onClick={()=>console.log(data)} type="primary" danger>X</Button>
            }
            
        },
    ];
    const tableData = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,

        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,

        },
    ];
    const onPaginationChange = (page: number, pageSize: number) => {
        console.log("Page:", page, "pageSize:", pageSize);
    };
    const paginationConfig = {
        pageSize: 5, total: 10, pageSizeOptions: [5, 10, 20],
        showSizeChanger: true, onChange: onPaginationChange,
    };

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        console.log(order, field);
    }

    return (
        <Table loading={false} columns={columns} dataSource={tableData}
            pagination={paginationConfig} onChange={onTableChange}
        >IHTable</Table>
    )
}

export default IHTable