// TODO 3: Import data students dari folder data/students.js
const students = require('./student.js');

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    res.json(students);
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    const newStudent = req.body; // Asumsi data dikirim via request body
    newStudent.id = students.length + 1; // Generate ID baru
    students.push(newStudent);
    res.json({ message: "Student added successfully", student: newStudent });
  }

  update(req, res) {
    // TODO 6: Update data students
    const { id } = req.params; // Asumsi ID dikirim via URL params
    const updatedData = req.body; 
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    Object.assign(student, updatedData); // Update data student
    res.json({ message: "Student updated successfully", student });
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    const { id } = req.params; // Asumsi ID dikirim via URL params
    const index = students.findIndex((s) => s.id === parseInt(id));

    if (index === -1) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    const deletedStudent = students.splice(index, 1); // Hapus student
    res.json({ message: "Student deleted successfully", student: deletedStudent });
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
