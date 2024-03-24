import React from 'react';
import { Table, Tag } from 'antd'; // Import Tag from antd for colored status
const columns = [
    {
        title: 'S.No',
        dataIndex: 'number'
    },
    {
        title: 'Order Id',
        dataIndex: 'orderId',
    },
    {
        title: 'Machine Name',
        dataIndex: 'machineName',
    },
    {
        title: 'Customer Name',
        dataIndex: 'name',
    },
    {
        title: 'Contact Number',
        dataIndex: 'contactNumber',
    },
    {
        title: 'Total Amount',
        dataIndex: 'amount',
        sorter: {
            compare: (a, b) => a.amount - b.amount,
        },
    },
    {
        title: 'Date',
        dataIndex: 'date',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: status => {
            let color = '';
            switch (status) {
                case 'SUCCESS':
                    color = 'green';
                    break;
                case 'SENT':
                    color = 'blue';
                    break;
                case 'PENDING':
                    color = 'gold';
                    break;
                case 'FAILURE':
                    color = 'red';
                    break;
                default:
                    color = '';
            }
            return (
                <Tag color={color} key={status} style={{background:'#fff',borderRadius: 12}}>
                    {status}
                </Tag>
            );
        }
    }

];
const data = [
    {
        key: '1',
        number: '1',
        name: 'Anurag Singh',
        orderId: 'OD101',
        machineName: 'Ahaar Stall 23 (M1102)',
        contactNumber: '7465647823',
        amount: 98,
        date: '21/03/2022',
        status: 'SUCCESS'
    },
    {
        key: '2',
        number: '2',
        name: 'Shubham Jha',
        orderId: 'OD102',
        machineName: 'Ahaar Stall 32 (M1105)',
        contactNumber: '7465647343',
        amount: 101,
        date: '22/03/2022',
        status: 'SENT'
    },
    {
        key: '3',
        number: '3',
        name: 'Ram Thawani',
        orderId: 'OD103',
        machineName: 'Ahaar Stall 45 (M1106)',
        contactNumber: '9365647343',
        amount: 99,
        date: '23/03/2022',
        status: 'PENDING'
    },
    {
        key: '4',
        number: '4',
        name: 'Vivek Sharma',
        orderId: 'OD104',
        machineName: 'Ahaar Stall 67 (M1107)',
        contactNumber: '8265647343',
        amount: 88,
        date: '24/03/2022',
        status: 'FAILURE'
    },
];
const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};
const OrderTable = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default OrderTable;
