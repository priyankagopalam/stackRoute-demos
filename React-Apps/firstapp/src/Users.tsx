type UserListProps = {
    users: string[];
}
function Users({ users }: UserListProps) {
    return (
        <div>
            <ul>
                {
                    users.map((user: string, i: number) => <li key={i}>{user}</li>)
                }
            </ul>
        </div>
    )
}

export default Users;