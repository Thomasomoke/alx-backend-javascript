const fs = require('fs').promises;

/**
 * Counts the number of students in each field and logs the details.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} - Resolves when done or throws an error.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = {};

    // Assuming the first line is the header
    const headers = lines[0].split(',');

    // Loop through each student line after the header
    lines.slice(1).forEach((line) => {
      const student = line.split(',');
      const firstName = student[0]; // First name is the 1st column (index 0)
      const field = student[3]; // Field is the 4th column (index 3)

      // Skip empty lines
      if (!firstName || !field) return;

      // Add student to the field list
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
    });

    // Log the total number of students
    const totalStudents = lines.length - 1; // Exclude the header
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    Object.keys(students).forEach((field) => {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Export the function
module.exports = countStudents;
