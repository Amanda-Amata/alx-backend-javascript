/**
 * Get the sum of students
 * @param {{
 *  id: int,
 *  firstName: string,
 *  locataion: string
 * }[]} students - the list of students.
 * @return {Number}
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
