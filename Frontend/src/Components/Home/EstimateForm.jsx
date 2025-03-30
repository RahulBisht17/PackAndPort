import { useState, useRef } from "react";
import { Upload } from "lucide-react";

export default function EstimateForm() {
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    phone: "",
    name: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [responseGenerated, setResponseGenerated] = useState(false);
  const responseRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (isSubmitted) validateField(name, value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    if (isSubmitted) validateField("image", file);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    if (!value) {
      newErrors[name] = "This field is required";
    } else {
      delete newErrors[name];
    }

    if (
      isSubmitted &&
      name === "phone" &&
      value &&
      !/^[0-9]{10}$/.test(value)
    ) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (
      name === "date" &&
      value &&
      new Date(value) < new Date().setHours(0, 0, 0, 0)
    ) {
      newErrors.date = "Date cannot be in the past";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      const fieldErrors = validateField(key, formData[key]);
      newErrors = { ...newErrors, ...fieldErrors };
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    console.log("Estimate request submitted:", formData);
    setCalculating(true);
    setResponseGenerated(false);

    // Scroll immediately after clicking submit
    setTimeout(() => {
      if (responseRef.current) {
        responseRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);

    // Show final estimated price after delay
    setTimeout(() => {
      setCalculating(false);
      setResponseGenerated(true);
    }, 3000);
  };

  return (
    <div className="mt-10 w-full p-4 rounded-lg mx-auto pb-10 sm:px-10 md:px-14 max-w-7xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-700 mb-1">
        Get Estimate Price
      </h2>
      <p className="mb-8 md:mb-10 text-md sm:text-lg lg:text-2xl text-gray-600">
        Upload image of your items and get an estimate price.
      </p>

      <form
        className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 lg:grid-cols-3 md:gap-y-5"
        onSubmit={handleSubmit}
      >
        {[
          { label: "Pickup Address", name: "pickup", type: "text" },
          { label: "Drop Address", name: "drop", type: "text" },
          { label: "Date", name: "date", type: "date" },
          { label: "Phone Number", name: "phone", type: "text" },
          { label: "Name", name: "name", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block font-medium text-gray-600 md:text-md lg:text-lg">
              {label}{" "}
              <span className="text-red-400 md:text-md lg:text-lg">*</span>
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border md:text-md lg:text-lg border-cyan-700 rounded focus:ring-1 focus:outline-none md:mt-1"
              placeholder={`Enter ${label.toLowerCase()}`}
            />
            {errors[name] && (
              <p className="text-red-500 text-sm md:mt-1">{errors[name]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="block font-medium text-gray-600 md:text-md lg:text-lg">
            Upload Image <span className="text-red-400">*</span>
          </label>
          <div className="md:mt-1 flex items-center space-x-2">
            <input
              type="file"
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="w-full cursor-pointer md:text-md lg:text-lg flex justify-center items-center space-x-2 border p-2 rounded-lg border-cyan-700 text-gray-600 hover:ring-1 "
            >
              <Upload size={18} />
              <span>
                {formData.image
                  ? formData.image.name.length > 30
                    ? formData.image.name.slice(0, 30) + "..."
                    : formData.image.name
                  : "Choose File"}
              </span>
            </label>
          </div>
          {errors.image && (
            <p className="text-red-500 text-sm md:mt-1">{errors.image}</p>
          )}
        </div>

        <button
          className="w-full sm:w-auto sm:col-span-2 lg:col-span-3 mt-4 p-2 px-8 cursor-pointer bg-cyan-700 hover:bg-cyan-500 text-white rounded-lg mx-auto md:text-md lg:text-xl"
          type="submit"
        >
          Get Estimate Price
        </button>
      </form>

      {/* RESPONSE SECTION (Calculating & Final Price) */}
      {(calculating || responseGenerated) && (
        <div
          ref={responseRef}
          className="mt-8 p-6 bg-gray-100 border border-cyan-700 rounded-lg shadow-md"
        >
          {calculating ? (
            <h3 className="text-lg font-semibold text-gray-600 animate-pulse">
              ⏳ Calculating estimate...
            </h3>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-cyan-700">
                Estimated Price
              </h3>
              <p className="text-gray-700 mt-2">
                🚛 Your estimated price for the selected route is **₹2500 -
                ₹3500**.
              </p>
              <p className="text-gray-600 mt-1">
                This is a rough estimate. Actual pricing may vary based on
                weight, distance, and availability.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
