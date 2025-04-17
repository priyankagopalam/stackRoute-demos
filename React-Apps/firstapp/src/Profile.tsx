import { useState } from "react";
function Profile() {
    const [user, setUser] = useState(['John']);
    return (
        <div>
            <p>This is Profile</p>
            <ul>
                {
                    user.map((item: string, i: number) => <li key={i}>{item}</li>)
                }
            </ul>
            <button onClick={() => setUser([...user, 'Peter'])}>Add User</button>
        </div>
    )
}

export default Profile;