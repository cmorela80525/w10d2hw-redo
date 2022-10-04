export default function EmployeeList({ img, employee, jobTitle }) { 
    return (
        <div className="employee-list">
          <img src={img} className="headshot" alt="employee headshot"></img>
          <h6 className="employee">{employee}</h6>
          <h6 className="job-title">{jobTitle}</h6>
        </div>
    )
}