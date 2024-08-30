"use client"

import MonthlyCalendarOffCanvas from "./calendar_offcanvas"
import TourPlans from "./tour_plans";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import {useState, useEffect} from 'react'

export default function Dashboard() {
    const [showMonthlyCalender, setMonthlyCalendar] = useState(false);
    
    const handleShow = () => {
        setMonthlyCalendar(false);
    }

    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('items'));
    }, []);

    return (
        <main>
            <div className="flex px-2 py-2">
                <div className="grow border-bottom font-bold">
                    Dashboard
                </div>
            </div>
            <div className="grid grid-rows-2 grid-flow-row gap-4 px-2">
                <div className="grid grid-cols-2 py-2 px-2 card-header sub-header">
                    <div className="sub-header-title">My Tour Plans</div>
                    <div className="py-0">
                        <Button className="float-right btn-default" variant="primary" onClick={() => setMonthlyCalendar(true)}>
                            Show Calendar
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-2 py-2 card-header h-2/3 mt-neg-40">
                    <div className="pr-1.5">
                        <Card className="card">
                            <Card.Header className="card-header">Upcoming Tours</Card.Header>
                            <Card.Body>
                                <TourPlans token={token}></TourPlans>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="pl-1.5">
                        <Card className="card">
                            <Card.Header className="card-header">Completed Tours</Card.Header>
                            <Card.Body>
                                <TourPlans token={token}></TourPlans>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <MonthlyCalendarOffCanvas showMonthlyCalender={showMonthlyCalender} handleShow={handleShow}></MonthlyCalendarOffCanvas>
        </main>
    );
}
