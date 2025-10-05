export default function UserProfile({ user }) {
  return (
    <div>
      {/* Display user information if not null/undfined */}

      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      {/* ?. will not throw an error if we check  */}
      {user?.name &&
        user?.email(
          <div>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
          </div>
        )}

      {/* Else show that our user isn't available */}
      {!user?.name && !user?.email && <p>No user data available</p>}
    </div>
  );
}
