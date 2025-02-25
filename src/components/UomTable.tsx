import React from "react";

interface Uom {
  id: number;
  name: string;
  rate_conversion: number;
  created_at: string;
}

interface UomTableProps {
  uoms: Uom[];
  onEdit: (uom: Uom) => void;
  onDelete: (id: number) => void;
}

const UomTable: React.FC<UomTableProps> = ({ uoms, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rate Conversion</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {uoms.map((uom, index) => (
            <tr key={uom.id}>
              <td>{index + 1}</td>
              <td>{uom.name}</td>
              <td>{uom.rate_conversion}</td>
              <td>{new Date(uom.created_at).toLocaleDateString()}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning mr-2"
                  onClick={() => onEdit(uom)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(uom.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UomTable;
