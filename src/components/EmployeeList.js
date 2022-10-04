import data from '../data'
import EmployeeListItem from './EmployeeListItem'


const employeesList = data.map((element, index) => {
  return (
    <EmployeeListItem
      key={index}
      {...element}
    />
  )
})

export default function EmployeeList() { 

  return (
    <div>
   {employeesList}
   </div>
  )
}