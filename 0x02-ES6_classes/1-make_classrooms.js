import ClassRoom from './0-classroom.js';

/**
 * create an array of classroom
 * return that created array
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
