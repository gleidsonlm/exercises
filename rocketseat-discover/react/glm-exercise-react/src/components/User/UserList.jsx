/* 
    1. Connect to sqlite3 database file /db/exercise.db;
    2. Query user table and return all results;
    3. Print results to HTML.
*/

export function UserList(pty) {
    return (
        <>
            <li><strong>{pty.fullname}</strong><br />
            Id: {pty.id}<br />
            Username: {pty.username}<br />
            Created: {pty.created}<br />
            </li>
        </>
    )
}