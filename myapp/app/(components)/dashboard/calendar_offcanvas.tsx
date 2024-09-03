"use client"

import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


import { DayPilot, DayPilotMonth } from "@daypilot/daypilot-lite-react";
import "../../../styles/calendar.css"

export default function MonthlyCalendarOffCanvas(props) {
  
  const [calendar, setCalendar] = useState(null);
  const [events, setEvents] = useState<{id: number;text: string;start: string;end: string;}[]>([]);
  const [startDate, setStartDate] = useState(DayPilot.Date.today());

  const myToken = props.myToken

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const config = {
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 20,
      locale: "en-us",
      viewType: "Month",
      showWeekend: true,
      eventDeleteHandling: "Disabled",
      eventMoveHandling: "Disabled",
      eventResizeHandling: "Disabled",
      eventClickHandling: "Disabled",
      eventHoverHandling: "Disabled",
  };

  const eve = [
      {id: 1, text: "Event 1", start: "2024-08-08", end: "2024-08-09", backColor: "#d5663e",},
      {id: 2,text: "Event 2",start: "2024-08-01",end: "2024-08-09", backColor: "#ecb823",},
      {id: 3,text: "Event 3",start: "2024-08-10",end: "2024-08-21", backColor: "#6aa84f",},
      {id: 4,text: "Event 4",start: "2024-08-14",end: "2024-08-21"},
      {id: 5,text: "Event 4",start: "2024-08-11",end: "2024-08-21"},
  ]

  useEffect(()=>{
    setEvents(eve)
  }, [])

  return (
    <>
      <Button className="float-right btn-default" variant="primary" onClick={handleShow}>
          Show Calendar
      </Button>
      <Offcanvas className="calendar_canvas" placement="end" backdrop="static" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Planned Tours & Travels This Month
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DayPilotMonth
            {...config}
            startDate={startDate}
            events={events}
            controlRef={setCalendar}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}