import JobList from "../components/jobs/JobList";


const DashBoard=({handlelogOut})=>{
    

    return(
        <div>
            <h1>dashboard</h1><JobList/>
            <button onClick={handlelogOut}>Logout</button>
        </div>
    )
}

export default DashBoard;