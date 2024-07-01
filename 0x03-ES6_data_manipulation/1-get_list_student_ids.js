/**
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns
 */
export default function getListStudentIds (student) {
	if (student instanceof Array) {
	 return student.map((student) => student.id);
	}
	return [];
}
