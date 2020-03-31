/*
  `````````````````````
  FOR A WHILE MOVED !
  
  `````````````````````
*/

import React from "react";
import { DateRangePicker, DateRange } from "@matharumanpreet00/react-daterange-picker";

// type Props = {}

const DateRangeMatha = props => {
	const [open, setOpen] = React.useState(true);
	const [dateRange, setDateRange] = React.useState({});

	return (
		<DateRangePicker
			open={open}
			onChange={range => setDateRange(range)}
		/>
	);
}

export default DateRangeMatha;