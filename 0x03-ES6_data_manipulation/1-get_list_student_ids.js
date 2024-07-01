/**
 * creates a function which returns students id's only
 * id: are returned as an array using map function
 */
export default function getListStudentIds (student) {
	if (student instanceof Array) {
	 return student.map((student) => student.id);
	}
	return [];
}
