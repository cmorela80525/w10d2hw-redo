import Header from "./Header"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"

export default function HomePage(props) {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <EmployeeList />
        
      </div>
    );
  }
  
