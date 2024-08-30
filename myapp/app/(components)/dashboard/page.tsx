"use client"

import MonthlyCalendarOffCanvas from "./calendar_offcanvas"
import Button from 'react-bootstrap/Button';

import {useState} from 'react'

export default function Dashboard() {
    const [showMonthlyCalender, setMonthlyCalendar] = useState(false);

    const handleShow = () => {
        setMonthlyCalendar(false);
    }

    return (
        <main>
            <div className="flex px-2 py-2">
                <div className="grow border-bottom font-bold">
                    Dashboard
                </div>
            </div>
            <div className="grid grid-rows-1grid-flow-row gap-4 px-2 py-2">
                <div className="grid grid-flow-row py-2 px-2 card-header">My Tour Plans</div>
                <div className="grid grid-flow-row h-2/3 py-2 px-2 overflow-scroll">
                    <Button variant="primary" onClick={() => setMonthlyCalendar(true)}>
                        Toggle static offcanvas
                    </Button>
                    <MonthlyCalendarOffCanvas showMonthlyCalender={showMonthlyCalender} handleShow={handleShow}></MonthlyCalendarOffCanvas>
                </div>
            </div>
        </main>
    );
}
