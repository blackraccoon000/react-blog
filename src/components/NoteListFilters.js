import React from "react"
import { connect } from "react-redux"
import { setText, setStartDate, setEndDate, setSqueezeNum, } from "../actions/filterActions"
import selectValueFilterFn from "../selectors/selectValueFilterFn"

const NoteListFilters = (props) => {
  console.log(props.inputTextFilterDispatcher)
  return (
  <div>
    <input type="text" defaultValue={props.filters.text}
      onChange={props.inputTextFilter}/>
    <select onChange={props.selectValueFilter}>
      <option value="date">date</option>
      <option value="text">text</option>
    </select>
    <select onChange={props.selectValueFilter}>
      <option value="ascending">ascending</option>
      <option value="descending">descending</option>
    </select>
    <input type="number" defaultValue={props.filters.squeezeNum}
      onChange={props.inputSqueezeFilter}/>
  </div>
)}

const mapStateToProps = state => {
  return {
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputTextFilter:(e) => dispatch(setText(e.target.value)),
    selectValueFilter:(e) => selectValueFilterFn(e,dispatch),
    inputSqueezeFilter:(e) => dispatch(setSqueezeNum(e.target.value))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteListFilters)