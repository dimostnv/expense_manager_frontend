import React from "react";

import {Card, ToggleButtonGroup, ToggleButton, ListGroup} from "react-bootstrap";
import {connect} from "react-redux";

import {yearList, monthList} from "./date-list";
import {updateExpensesFilter} from "../../State/actions";

import "./Year-group.css";

function mapDispatchToProps(dispatch) {
  return {
    addFilter: function(filter) {
      dispatch(updateExpensesFilter(filter));
    }
  }
}

function YearGroup(props) {
  let filter = {
    year: '',
    month: ''
  };
  const [yearValue, setYearValue] = React.useState('');
  const [monthValue, setMonthValue] = React.useState('');
  const handleYearChange = (value) => {
    setYearValue(value);
    filter.year = value;
    props.addFilter(filter);
  };
  const handleMonthChange = (value) => {
    setMonthValue(value);
    filter.year = yearValue;
    filter.month = value + 1;
    props.addFilter(filter);
  };

  return (
    <div className="filters">
      <Card>
            <ToggleButtonGroup type="radio" name='years' value={yearValue} className="button-group"
                               onChange={handleYearChange}>
              {yearList.map((year, index) => {
                return (<ToggleButton key={index} value={year} className='button'
                                      variant="info">{year}</ToggleButton>);
              })}
            </ToggleButtonGroup>
            <ToggleButtonGroup type="radio" name='months' value={monthValue} className="button-group"
                               onChange={handleMonthChange}>
              {monthList.map((month, index) => {
                return (<ToggleButton key={index} value={index}
                                      variant="outlined-info">{month}</ToggleButton>);
              })}
            </ToggleButtonGroup>
      </Card>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(YearGroup);