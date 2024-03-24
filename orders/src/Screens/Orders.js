import React, { useEffect, useState } from 'react';
import OrderTable from '../Components/OrderTable.js/OrderTable';
import Search from '../Components/Search/Search';
import FilterModal from '../Components/FilterModal/Filter';
import './orders.css';
import moment from 'moment'

const orderDetail = [
    { name: 'Machine', quantity: 6 },
    { name: 'Orders', quantity: 16 },
    { name: 'Customer', quantity: 90 },
    { name: 'Drinks', quantity: 60 },
    { name: 'Total Amount', quantity: 16 },
    { name: 'Refund Initated', quantity: 600 }
];

const statusOptions = [
    { id: 1, name: 'SUCCESS' },
    { id: 2, name: 'SENT' },
    { id: 3, name: 'PENDING' },
    { id: 4, name: 'FAILURE' },
    { id: 5, name: 'REFUND INITIATED' },
    { id: 6, name: 'REFUND COMPLETED' }
];

const machines = [
    { id: '1', name: 'Machine 1', address: 'Address 1' },
    { id: '2', name: 'Machine 2', address: 'Address 2' },
    { id: '3', name: 'Machine 3', address: 'Address 3' }
];

function App() {
    const [orders, setOrders] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedMachines, setSelectedMachines] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    useEffect(() => {
        const simulatedOrders = [
            { id: 1, product: 'Product A', quantity: 5 },
            { id: 2, product: 'Product B', quantity: 3 },
            { id: 3, product: 'Product C', quantity: 8 },
        ];

        setOrders(simulatedOrders);
    }, []);

    const closeFilter = () => {
        setShowFilter(false);
    };

    const openFilter = () => {
        setShowFilter(true);
    };

    const handleApplyFilter = () => {
        console.log(selectedMachines, selectedStatus, startDate, endDate, "selectedMachines,selectedStatus,startDate,endDate");
    };

    const removeSelectedMachine = (machineId) => {
        setSelectedMachines(prev => prev.filter(machine => machine.id !== machineId));
    };

    const removeSelectedStatus = () => {
        setSelectedStatus(null);
    };

    const removeStartDate = () => {
        setStartDate(null);
    };

    const removeEndDate = () => {
        setEndDate(null);
    };

    const clearAll=()=>{
        setSelectedStatus(null);
        setStartDate(null);
        setEndDate(null);
        setSelectedMachines([])
    }


    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <p>All Orders</p>
                    <div className="profile-icon">
                        <Search />
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
                        </svg>
                    </div>
                </div>
            </nav>
            <div className='content'>
                <Search />
            </div>
            <div className="container">
                <div className='order-table'>
                    <div className='order-content'>
                        {
                            orderDetail && orderDetail.map((item, index) => (
                                <div key={index} className='order-detail'>
                                    <p className='order-detail-content'>{item.name}</p> &nbsp;:&nbsp;
                                    <p className='order-detail-content'> {item.quantity}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <OrderTable />
                    </div>
                </div>
                <div className='filter-container'>
                    <p>FILTERS</p>
                    <div className='filter-actions'>
                        <div className='filter-select' onClick={() => openFilter()}>
                            <p>Select Filters</p>
                        </div>
                        <div className='clear-all' style={{cursor:"pointer"}} onClick={()=>clearAll()}>
                            Clear All
                        </div>
                    </div>
                    <div className="selected-filters">
                    {selectedMachines.length > 0 && (
                        <div className="filter-tag-container">
                            <p>Selected Machines:</p>
                            {selectedMachines.map(machine => (
                                <div key={machine.id} className="filter-tag">
                                    <span>{machine.name}</span>
                                    <span className="close-icon" onClick={() => removeSelectedMachine(machine.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                                        </svg>
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                        {selectedStatus && (
                            <div className="filter-tag-container">
                                <p>Selected Status:</p>
                                <div className='filter-tag'>
                                <span>{selectedStatus.name}</span>
                                <span className="close-icon" onClick={removeSelectedStatus}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></span>
                                </div>
                            </div>
                        )}
                        {startDate && (
                            <div className="filter-tag-container">
                                <p>Start Date:</p>
                                <div className='filter-tag'>
                                    <span>{moment(startDate).format('ll')}</span>
                                    <span className="close-icon" onClick={removeStartDate}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></span>
                                </div>
                            </div>
                        )}
                        {endDate && (
                            <div className="filter-tag-container">
                                <p>End Date:</p>
                                <div className='filter-tag'>
                                <span>{moment(endDate).format('ll')}</span>
                                <span className="close-icon" onClick={removeEndDate}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg></span>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            {
                showFilter &&
                <FilterModal
                    visible={showFilter}
                    onCancel={() => closeFilter()}
                    statusOptions={statusOptions}
                    machines={machines}
                    onApply={() => handleApplyFilter()}
                    selectedMachines={selectedMachines}
                    selectedStatus={selectedStatus}
                    startDate={startDate}
                    endDate={endDate}
                    setSelectedMachines={setSelectedMachines}
                    setSelectedStatus={setSelectedStatus}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    onClear={()=>clearAll()}
                />
            }
        </div>
    );
}

export default App;
