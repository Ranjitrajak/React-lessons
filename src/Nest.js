import React from 'react'
import Table from 'react-bootstrap/Table';

const Nest = () => {
    const users = [
        {
          name: 'Anil', email: 'anil@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
        {
          name: 'Burce', email: 'bruce@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
        {
          name: 'Peter', email: 'peter@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
        {
          name: 'Sam', email: 'sam@test.com', address: [
            { hm: '101', city: 'Noida', country: 'India' },
            { hm: '10', city: 'Gurgaon', country: 'India' },
            { hm: '23', city: 'Noida', country: 'India' },
            { hm: '45', city: 'Delhi', country: 'India' },
          ]
        },
      ]
  return (
    <div>
          <h1>List with Nested Array</h1>
      <Table variant="dark"  >
        <tbody>
          <tr>
          <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
               <td>{i+1}</td>
            <td>{item.name}</td>
          <td>{item.email}</td>
            <td>
              {/*  */}
              <Table variant="dark"  >
        <tbody>
              {
                item.address.map((data)=>

                <tr>
                  <td>{data.hm}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
              }
              </tbody>
              </Table>
              {/*  */}
            </td>
          </tr>
          )
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Nest