import React from "react";

const ProfilePage = () => {
  const profileData = {
    firstName: "John",
    lastName: "Doe",
    country: "New Delhi, India",
    language: "English (UK)",
    email: "johndoe@example.com",
    bio: "Passionate about travel and logistics, ensuring smooth deliveries worldwide.",
  };

  return (
    <div className="min-h-screen bg-cyan-900 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-3xl p-6 sm:p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-cyan-900 underline underline-offset-4 mb-6">
          Personal Information
        </h2>

        <div className="space-y-6">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={profileData.firstName}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={profileData.lastName}
                readOnly
              />
            </div>
          </div>

          {/* Country & Language */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Country/Region</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={profileData.country}
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Language</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={profileData.language}
                readOnly
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Contactable at</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={profileData.email}
              readOnly
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 mb-2">Bio</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={profileData.bio}
              readOnly
              rows="3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
