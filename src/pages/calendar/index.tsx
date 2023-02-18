import React from "react";
import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";

function Calendar () {
  return (
    <FullCalendar
      plugins={[ daygrid ]}
      initialView="dayGridMonth"
    />
  )
}