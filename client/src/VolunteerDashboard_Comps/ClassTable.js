import React, { useState, useEffect } from 'react';
import moment from 'moment';


function ClassTable() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch('https://cyf-student-register.onrender.com/api/classes')
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => console.error(error));
  }, []);

  const shouldShowRow = (element) => {
    return element.trainees.some((trainee) => {
      return (
        trainee._id !== null ||
        trainee.username !== null ||
        trainee.flags !== null ||
        trainee.logintime !== null ||
        trainee.logouttime !== null
      );
    });
  };

  return (
    <table className="class-logs-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Flag</th>
          <th>Login Time</th>
          <th>Logout Time</th>
        </tr>
      </thead>
      <tbody>
        {logs
          .filter((element) => shouldShowRow(element))
          .map((element) => (
            <tr key={element._id}>
              <td>
                {element.trainees.map((trainee) => (
                  <div key={trainee._id}>
                    <p>{trainee._id}</p>
                  </div>
                ))}
              </td>
              <td>
                {element.trainees.map((trainee) => (
                  <div key={trainee._id}>
                    <p>{trainee.username}</p>
                  </div>
                ))}
              </td>
              <td>
                {element.trainees.map((trainee) => (
                  <div key={trainee._id}>
                    <p>{trainee.flags}</p>
                  </div>
                ))}
              </td>
              <td>
                {element.trainees.map((trainee) => (
                  <p key={trainee._id}>
                    {moment(trainee.logintime).format('h:mm a')}
                  </p>
                ))}
              </td>
              <td>
                {element.trainees.map((trainee) => (
                  <div key={trainee._id}>
                    {trainee.logouttime ? (
                      <p>{moment(trainee.logouttime).format('h:mm a')}</p>
                    ) : (
                      <p>Still logged in</p>
                    )}
                  </div>
                ))}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ClassTable;