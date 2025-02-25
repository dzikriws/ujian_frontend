import React from "react";

interface User {
  role_id: number;
  username: string;
  role: string;
  ts_insert: string;
  status: string;
}

interface UserTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onEdit, onDelete }) => {
  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Username</th>
          <th>Role</th>
          <th>Date Created</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.role_id}>
            <td>{user.username}</td>
            <td>{user.role}</td>
            <td>{new Date(user.ts_insert).toLocaleDateString()}</td>
            <td>
              {" "}
              <span
                className={`px-2 py-1 rounded text-white text-sm font-semibold ${
                  user.status === "A" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {user.status === "A" ? "Active" : "Inactive"}
              </span>
            </td>
            <td>
              <button
                className="btn btn-sm btn-warning mr-2"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(user.role_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
