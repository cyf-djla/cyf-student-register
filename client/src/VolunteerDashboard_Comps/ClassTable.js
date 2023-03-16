import React, { useState, useEffect } from "react";
import moment from "moment";
import "../index.css";

function ClassTable({ classId }) {
  const [logs, setLogs] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [selectedFlag, setSelectedFlag] = useState(null);

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

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  const handleFlagChange = (event) => {
    setSelectedFlag(event);
  };

  const handleFlagSubmit = async () => {
    if (selectedRowIndex !== null && selectedFlag !== null) {
      const selectedTrainee = filteredLogs[0].trainees[selectedRowIndex];
      const updatedTrainee = {
        ...selectedTrainee,
        flags: [...selectedTrainee.flags, selectedFlag],
      };
      const updatedTrainees = [...filteredLogs[0].trainees];
      updatedTrainees[selectedRowIndex] = updatedTrainee;
      const updatedLog = {
        ...filteredLogs[0],
        trainees: updatedTrainees,
      };
      const updatedLogs = [...logs];
      updatedLogs[updatedLogs.indexOf(filteredLogs[0])] = updatedLog;
      setLogs(updatedLogs);
      setSelectedRowIndex(null);
      setSelectedFlag(null);

      try {
        const response = await fetch(
          `http://localhost:4200/api/classes/postflag/${selectedTrainee._id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ flag: selectedFlag, classId:'640614ceb1d896228df224cd' }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  //   const handleFlagChange = (event) => {
  //     setSelectedFlag(event);
  //   };

  //   const handleFlagSubmit = async () => {
  //   if (selectedRowIndex !== null && selectedFlag !== null) {
  //     const selectedTrainee = filteredLogs[0].trainees[selectedRowIndex];
  //     const updatedTrainee = {
  //       ...selectedTrainee,
  //       flags: [...selectedTrainee.flags, selectedFlag],
  //     };
  //     const updatedTrainees = [...filteredLogs[0].trainees];
  //     updatedTrainees[selectedRowIndex] = updatedTrainee;
  //     const updatedLog = {
  //       ...filteredLogs[0],
  //       trainees: updatedTrainees,
  //     };
  //     const updatedLogs = [...logs];
  //     updatedLogs[updatedLogs.indexOf(filteredLogs[0])] = updatedLog;
  //     setLogs(updatedLogs);
  //     setSelectedRowIndex(null);
  //     setSelectedFlag(null);

  //     try {
  //       const response = await fetch(`https://cyf-student-register.onrender.com/api/classes/postflag/${selectedTrainee._id}`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({ flag: selectedFlag })
  //       });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  return (
    <div className="class-logs">
      {filteredLogs.length === 0 ? (
        <p>No logs found for this class</p>
      ) : (
        <>
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
                .map((trainee, index) => (
                  <tr
                    key={trainee._id}
                    onClick={() => handleRowClick(index)}
                    className={selectedRowIndex === index ? "selected" : ""}
                  >
                    <td>{trainee._id}</td>
                    <td>{trainee.username}</td>
                    <td>{trainee.flags.join(", ")}</td>
                    <td>
                      {trainee.logintime
                        ? moment(trainee.logintime).format("h:mm a")
                        : "-"}
                    </td>
                    <td>
                      {trainee.logouttime
                        ? moment(trainee.logouttime).format("h:mm a")
                        : "Still logged in"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {selectedRowIndex !== null && (
            <div className="flag_box">
              <h3>Flag Trainee:</h3>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  name="flags"
                  value="Late"
                  onChange={(e) => handleFlagChange(e.target.value)}
                />
                Late
              </label>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  name="flags"
                  value="Left early"
                  onChange={(e) => handleFlagChange(e.target.value)}
                />
                Left early
              </label>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  name="flags"
                  value="Not participating"
                  onChange={(e) => handleFlagChange(e.target.value)}
                />
                Not participating
              </label>
              <label>
                <input
                  type="radio"
                  className="radio-button"
                  name="flags"
                  value="Absent/Camera off"
                  onChange={(e) => handleFlagChange(e.target.value)}
                />
                Absent/Camera off
              </label>
              <button className="table_button" onClick={handleFlagSubmit}>
                Submit
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ClassTable;
