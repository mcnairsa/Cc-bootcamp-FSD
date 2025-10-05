export default function UserProfile({ user }){
    return (
        <div>
            {user && (
                <div>
                    <h3>Name: {user.name}</h3>
                    <p>Email: {user.email}</p>
                </div>
            )}
            
            {!user && <p>No user data available</p>}
        </div>
    );
}