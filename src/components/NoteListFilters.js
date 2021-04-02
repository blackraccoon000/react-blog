import React from "react"
import { connect } from "react-redux"
import { setText, setStartDate, setEndDate, setSqueezeNum, } from "../actions/filterActions"
import selectValueFilterFn from "../selectors/selectValueFilterFn"

const NoteListFilters = (props) => {
  return (
  <div>
    <input type="text" defaultValue={props.filters.text}
      onChange={props.inputTextFilter}
      data-testid="textFilter"/>
    <select
      value={props.filters.sortBy}
      onChange={props.selectValueFilter}
      data-testid="dataOrText"
    >
      <option value="date" data-testid="select-date">date</option>
      <option value="text" data-testid="select-text">text</option>
    </select>
    <select
      value={props.filters.sortOrder}
      onChange={props.selectValueFilter}
      data-testid="ascOrDes"
    >
      <option value="ascending">ascending</option>
      <option value="descending">descending</option>
    </select>
    <input type="number" defaultValue={props.filters.squeezeNum}
      onChange={props.inputSqueezeFilter}
      data-testid="squeezeFilter"
    />
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
export { NoteListFilters }