import Select from '@material-ui/core/Select';
import './style.scss';
//Please check the docs here 
// https://material-ui.com/components/selects/
// This component uses MenuItems as options
// <MenuItem value={10}>Ten</MenuItem>
const CustomSelect = (props)=>{
    return (
        <Select
            className='custom-select'
          labelId={`${props.title}`}
          id={props.title}
          value={props.value}
          onChange={props.handleChange}
        >
            {props.children}
        </Select>
    )
}

export default CustomSelect;