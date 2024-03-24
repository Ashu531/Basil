import React, { useState } from 'react';
import { Modal, Input, Table, Tag, DatePicker, Checkbox, Button } from 'antd';
import moment from 'moment'; // Import moment library

const { RangePicker } = DatePicker;

const FilterModal = ({ 
    visible, 
    onCancel, 
    onClear, 
    onApply, 
    statusOptions, 
    machines,
    selectedMachines ,
    selectedStatus,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    setSelectedStatus,
    setSelectedMachines,
}) => {
    

    const columns = [
        { title: 'Machine Name', dataIndex: 'name' },
        { title: 'Address', dataIndex: 'address' },
        {
            title: 'Select',
            dataIndex: 'select',
            render: (_, record) => (
                <Checkbox
                    checked={selectedMachines.some(machine => machine.id === record.id)}
                    onChange={(e) => handleMachineSelect(e, record)}
                />
            )
        }
    ];

    const handleMachineSelect = (e, record) => {
        if (e.target.checked) {
            setSelectedMachines([...selectedMachines, { id: record.id, name: record.name }]);
        } else {
            setSelectedMachines(selectedMachines.filter(machine => machine.id !== record.id));
        }
    };

    const handleClear = () => {
        setSelectedMachines([]);
        setSelectedStatus(null);
        setStartDate(null);
        setEndDate(null);
        onClear();
    };

    const handleApply = () => {
        onApply(selectedMachines, selectedStatus, startDate, endDate);
        onCancel()
    };

    const handleSelectStatus = (status) => {
        setSelectedStatus(status);
    };

    const handlePredefinedDateRange = (range) => {
        let start, end;

        switch (range) {
            case 'today':
                start = end = moment();
                break;
            case 'tomorrow':
                start = moment().add(1, 'day');
                end = moment().add(1, 'day');
                break;
            case 'last7days':
                end = moment();
                start = moment().subtract(6, 'days');
                break;
            case 'last1month':
                end = moment();
                start = moment().subtract(1, 'month');
                break;
            case 'last1year':
                end = moment();
                start = moment().subtract(1, 'year');
                break;
            default:
                start = end = null;
        }

        setStartDate(start);
        setEndDate(end);
    };

    return (
        <Modal
            title="Filter"
            open={visible}
            onCancel={onCancel}
            footer={[
                <Button key="clear" onClick={handleClear}>Clear All</Button>,
                <Button key="apply" type="primary" onClick={handleApply}>Apply</Button>
            ]}
            width={800}
        >
            <div>
                <h4>Filter</h4>
                <Input placeholder="Search..." style={{ width: '100%' }} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h4>Machine</h4>
                <Table columns={columns} dataSource={machines} pagination={false} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <h4>Status</h4>
                {statusOptions.map(status => {
                    return(
                        <Tag
                            key={status.id}
                            color={selectedStatus && selectedStatus.id === status.id ? 'blue' : ''}
                            onClick={() => handleSelectStatus(status)}
                            style={{ cursor: 'pointer', margin: '0 5px 5px 0' }}
                        >   
                        {console.log(status,"status")}
                            {status.name}
                        </Tag>
                    )
                })}
            </div>
            <div style={{ marginTop: '20px' }}>
                <h4>Date Range</h4>
                <div>
                    <Button onClick={() => handlePredefinedDateRange('today')}>Today</Button>
                    <Button onClick={() => handlePredefinedDateRange('tomorrow')}>Tomorrow</Button>
                    <Button onClick={() => handlePredefinedDateRange('last7days')}>Last 7 Days</Button>
                    <Button onClick={() => handlePredefinedDateRange('last1month')}>Last 1 Month</Button>
                    <Button onClick={() => handlePredefinedDateRange('last1year')}>Last 1 Year</Button>
                </div>
                <RangePicker
                    style={{ width: '100%', marginTop: '10px' }}
                    onChange={(dates) => {
                        setStartDate(dates[0]);
                        setEndDate(dates[1]);
                    }}
                    value={[startDate, endDate]}
                />
            </div>
        </Modal>
    );
};

export default FilterModal;
