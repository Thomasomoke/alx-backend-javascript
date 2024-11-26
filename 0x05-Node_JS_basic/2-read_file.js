const fs = require('fs');

/**
 * Reads and processes the student database file.
 * @param {string} path - The file path to the database.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();

    // Split data into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length === 0) throw new Error('Cannot load the database');

    // Extract the header and student data
    const header = lines.shift();
    const students = lines.map((line) => line.split(',')).filter((student) => student.length > 1);

    // Process students by field
    const fields = {};
    for (const student of students) {
      const [firstName, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    // Log overall count
    console.log(`Number of students: ${students.length}`);

    // Log counts and lists by field
    for (const [field, firstNames] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
