import React from 'react';
import { fetchDupicateUsers, fetchDupicateCheck} from './util/api_util';
import ReactTable from 'react-table';
// import 'react-table/react-table.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { analyzing: 'duplicates', check: {}, duplicates: {}}
  }

  componentDidMount(){
    fetchDupicateCheck().then(
      (check)=>{
        this.setState({check});
      }
    );
    fetchDupicateUsers().then(
      (duplicates) => {
        this.setState({duplicates});
      }
    );
  }
  setData(type){
    this.setState({analyzing: type});
  }
  
  render(){
    const columns = [
      {
        Header: 'First Name',
        accessor: 'first_name' // String-based value accessors!
      },
      {
        Header: 'Last Name',
        accessor: 'last_name' // String-based value accessors!
      },
      {
        Header: 'Company',
        accessor: 'company' // String-based value accessors!
      },
      {
        Header: 'Email',
        accessor: 'email' // String-based value accessors!
      },
      {
        Header: 'Address 1',
        accessor: 'address1' // String-based value accessors!
      },
      {
        Header: 'Address 2',
        accessor: 'address2' // String-based value accessors!
      },
      {
        Header: 'Zip Code',
        accessor: 'zip' // String-based value accessors!
      },
      {
        Header: 'City',
        accessor: 'city' // String-based value accessors!
      },
      {
        Header: 'State',
        accessor: 'state_long' // String-based value accessors!
      },
      {
        Header: 'Phone',
        accessor: 'phone' // String-based value accessors!
      }
    ]
    return (
      <div>
        <div className="buttons">
          <button onClick={() => { this.setData('duplicates')}}>
            <h1>
              Duplicates
            </h1>
          </button>
          <button onClick={() => { this.setData('check')}}>
            <h1>
              Check Duplicates
            </h1>
          </button>

        </div>

        <ReactTable
          data={Object.values(this.state[this.state['analyzing']])}
          columns={columns}
          loading={false}
          showPagination={true}
          showPaginationTop={false}
          showPaginationBottom={true}
          showPageSizeOptions={true}
              />
      </div>
    );
  }
};


export default App;
