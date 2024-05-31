import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "..";
import { Navigate } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("");
  const [editStudent, setEditStudent] = useState(null);
  const { isAuthenticated } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchStudents = async (page) => {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/v1/users/students`, {
        params: {
          page,
          limit: 15,
          search: searchTerm,
          filter: filterTerm,
          sort: sortTerm,
        },
        withCredentials: false,
      });
      setStudents(data.students);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchStudents(currentPage);
  }, [currentPage, searchTerm, filterTerm, sortTerm]);

  const handleDelete = async (studentId) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/users/${studentId}`, {
        withCredentials: false,
      });
      toast.success("Student deleted successfully");
      fetchStudents(currentPage); // جلب البيانات الحديثة
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleEdit = (student) => {
    setEditStudent(student);
  };

  const handleUpdate = async (studentId) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/users/updateUser/${studentId}`, editStudent, {
        withCredentials: false,
      });
      setStudents(students.map(student => student.userId === studentId ? editStudent : student));
      setEditStudent(null);
      toast.success("Student updated successfully");
      fetchStudents(currentPage); // جلب البيانات الحديثة
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent({ ...editStudent, [name]: value });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortTerm(event.target.value);
  };

  if (!isAuthenticated) {
    return <Navigate to={"/loginAdmin"} />;
  }

  return (
    <section className="page students">
      <h1>STUDENTS</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          placeholder="Filter by Current cycle"
          value={filterTerm}
          onChange={handleFilterChange}
        />
        <select value={sortTerm} onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="mark_asc">Mark (Low-High)</option>
          <option value="mark_desc">Mark (High-Low)</option>
          <option value="rank_asc">Rank (Low-High)</option>
          <option value="rank_desc">Rank (High-Low)</option>
        </select>
      </div>
      <div className="banner">
        {students.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Mark</th>
                  <th>Rank</th>
                  <th>Current Cycle</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((element) => (
                  <tr key={element._id}>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="text"
                          name="Name"
                          value={editStudent.Name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.Name
                      )}
                    </td>
                    <td>{element.userId}</td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="email"
                          name="email"
                          value={editStudent.email}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.email
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="text"
                          name="phone"
                          value={editStudent.phone}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.phone
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="text"
                          name="age"
                          value={editStudent.age}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.age
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="number"
                          name="mark"
                          value={editStudent.mark}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.mark
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="number"
                          name="rank"
                          value={editStudent.rank}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.rank
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="text"
                          name="current_Cycle"
                          value={editStudent.current_Cycle}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.current_Cycle
                      )}
                    </td>
                    <td>
                      {editStudent && editStudent.userId === element.userId ? (
                        <input
                          type="text"
                          name="password"
                          value={editStudent.password}
                          onChange={handleInputChange}
                        />
                      ) : (
                        element.password
                      )}
                    </td>
                    <td className="table-actions">
                      {editStudent && editStudent.userId === element.userId ? (
                        <>
                          <button
                            className="save-button"
                            onClick={() => handleUpdate(element.userId)}
                          >
                            Save
                          </button>
                          <button
                            className="cancel-button"
                            onClick={() => setEditStudent(null)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="edit-button"
                            onClick={() => handleEdit(element)}
                          >
                            Edit
                          </button>
                          <button
                            className="delete-button"
                            onClick={() => handleDelete(element._id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button
                onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <h1>No Registered Students Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Students;
