import React, { useState } from "react";

interface AddUomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (uom: { name: string; rate_conversion: number }) => void;
}

const AddUomModal: React.FC<AddUomModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [rateConversion, setRateConversion] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, rate_conversion: Number(rateConversion) });
    setName("");
    setRateConversion("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-base-200 p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-white">Add UOM</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block font-semibold text-white">Name</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block font-semibold text-white">Rate Conversion</label>
            <input
              type="number"
              className="input"
              value={rateConversion}
              onChange={(e) => setRateConversion(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUomModal;
