import React, { useState, useEffect } from "react";
import moment from "moment";
import "../index.css";

function ClassTable({ classId }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("https://cyf-student-register.onrender.com/api/classes")
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredLogs = logs.filter((element) => {
    return (
      element._id === classId ||
      element.name.toLowerCase().includes(classId.toLowerCase())
    );
  });

  const shouldShowRow = (trainee) => {
    return (
      trainee._id !== null ||
      trainee.username !== null ||
      trainee.flags !== null ||
      trainee.logintime !== null ||
      trainee.logouttime !== null
    );
  };

  return (
    <div className="class-logs">
      {filteredLogs.length === 0 ? (
        <p>No logs found for this class</p>
      ) : (
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
            {filteredLogs[0].trainees
              .filter((trainee) => shouldShowRow(trainee))
              .map((trainee) => (
                <tr key={trainee._id}>
                  <td>{trainee._id}</td>
                  <td>{trainee.username}</td>
                  <td>{trainee.flags}</td>
                  <td>
                    {trainee.logintime ? (
                      moment(trainee.logintime).format("h:mm a")
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {trainee.logouttime ? (
                      moment(trainee.logouttime).format("h:mm a")
                    ) : (
                      "Still logged in"
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClassTable;
