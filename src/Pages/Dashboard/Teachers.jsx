import { useState, useEffect } from "react";
import Header from "../../Modules/Header";
import Modal from "../../Components/Modal/Modal";
import Button from "../../Components/Button/Button";
import WarningPage from "../../Components/WarningPage/Warning";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentTeacher, setCurrentTeacher] = useState(null);
  const [viewTeacher, setViewTeacher] = useState(null); 
  const [teacherToDelete, setTeacherToDelete] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    setTeachers(storedTeachers);
  }, []);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newTeacher = {
      id: currentTeacher?.id || Date.now(),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      className: formData.get("className"),
      gender: formData.get("gender"),
      age: formData.get("age"),
      about: formData.get("about"),
      image: imagePreview || currentTeacher?.image || "",
    };

    if (currentTeacher) {
      setTeachers((prev) =>
        prev.map((teacher) =>
          teacher.id === currentTeacher.id ? newTeacher : teacher
        )
      );
    } else {
      setTeachers((prev) => [...prev, newTeacher]);
    }

    setModalOpen(false);
    setCurrentTeacher(null);
    setImagePreview(null); // Reset image preview
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Generate image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmDelete = () => {
    setTeachers((prev) =>
      prev.filter((teacher) => teacher.id !== teacherToDelete.id)
    );
    setDeleteModalOpen(false);
    setTeacherToDelete(null);
  };

  const handleDelete = (teacher) => {
    setTeacherToDelete(teacher);
    setDeleteModalOpen(true);
  };

  const handleEdit = (teacher) => {
    setCurrentTeacher(teacher);
    setImagePreview(teacher.image || null);
    setModalOpen(true);
  };

  const handleView = (teacher) => {
    setViewTeacher(teacher);
  };

  return (
    
    <div className="p-5">
      <Header setModalOpen={setModalOpen} />

      {teachers.length === 0 ? (
        <WarningPage />
      ) : viewTeacher ? (
        <div className="flex gap-10 mt-[50px]">
  <div className="w-1/3">
    <img
      src={viewTeacher.image || `https://ui-avatars.com/api/?name=${viewTeacher.fullName}`}
      alt={viewTeacher.fullName}
      className="w-48 h-48 rounded-full mx-auto object-cover"
    />
    <h2 className="text-center text-xl font-bold mb-[10px] mt-[30px] leading-[20px] text-[16px]">
      {viewTeacher.fullName}
    </h2>
    <p className="text-center text-[#4F4F4F] text-[12px] leading-[15px]">
      {viewTeacher.email}
    </p>

    <div className="flex justify-center gap-4 mt-4">
      <div className="w-[60px] h-[60px] bg-[#EFF3FA] rounded-lg flex items-center justify-center">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5624 3.16248L5.0374 8.07498C2.6249 9.64998 2.6249 13.175 5.0374 14.75L12.5624 19.6625C13.9124 20.55 16.1374 20.55 17.4874 19.6625L24.9749 14.75C27.3749 13.175 27.3749 9.66248 24.9749 8.08748L17.4874 3.17498C16.1374 2.27498 13.9124 2.27498 12.5624 3.16248Z" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.0374 16.35L7.0249 22.2125C7.0249 23.8 8.2499 25.5 9.7499 26L13.7374 27.325C14.4249 27.55 15.5624 27.55 16.2624 27.325L20.2499 26C21.7499 25.5 22.9749 23.8 22.9749 22.2125V16.4125" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.75 18.75V11.25" stroke="#8A8A8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div className="w-[60px] h-[60px] bg-[#EFF3FA] rounded-lg flex items-center justify-center">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.4625 22.9125C27.4625 23.3625 27.3625 23.825 27.15 24.275C26.9375 24.725 26.6625 25.15 26.3 25.55C25.6875 26.225 25.0125 26.7125 24.25 27.025C23.5 27.3375 22.6875 27.5 21.8125 27.5C20.5375 27.5 19.175 27.2 17.7375 26.5875C16.3 25.975 14.8625 25.15 13.4375 24.1125C12 23.0625 10.6375 21.9 9.3375 20.6125C8.05 19.3125 6.8875 17.95 5.85 16.525C4.825 15.1 4 13.675 3.4 12.2625C2.8 10.8375 2.5 9.475 2.5 8.175C2.5 7.325 2.65 6.5125 2.95 5.7625C3.25 5 3.725 4.3 4.3875 3.675C5.1875 2.8875 6.0625 2.5 6.9875 2.5C7.3375 2.5 7.6875 2.575 8 2.725C8.325 2.875 8.6125 3.1 8.8375 3.425L11.7375 7.5125C11.9625 7.825 12.125 8.1125 12.2375 8.3875C12.35 8.65 12.4125 8.9125 12.4125 9.15C12.4125 9.45 12.325 9.75 12.15 10.0375C11.9875 10.325 11.75 10.625 11.45 10.925L10.5 11.9125C10.3625 12.05 10.3 12.2125 10.3 12.4125C10.3 12.5125 10.3125 12.6 10.3375 12.7C10.375 12.8 10.4125 12.875 10.4375 12.95C10.6625 13.3625 11.05 13.9 11.6 14.55C12.1625 15.2 12.7625 15.8625 13.4125 16.525C14.0875 17.1875 14.7375 17.8 15.4 18.3625C16.05 18.9125 16.5875 19.2875 17.0125 19.5125C17.075 19.5375 17.15 19.575 17.2375 19.6125C17.3375 19.65 17.4375 19.6625 17.55 19.6625C17.7625 19.6625 17.925 19.5875 18.0625 19.45L19.0125 18.5125C19.325 18.2 19.625 17.9625 19.9125 17.8125C20.2 17.6375 20.4875 17.55 20.8 17.55C21.0375 17.55 21.2875 17.6 21.5625 17.7125C21.8375 17.825 22.125 17.9875 22.4375 18.2L26.575 21.1375C26.9 21.3625 27.125 21.625 27.2625 21.9375C27.3875 22.25 27.4625 22.5625 27.4625 22.9125Z" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10"/>
      <path d="M23.125 11.25C23.125 10.5 22.5375 9.35 21.6625 8.4125C20.8625 7.55 19.8 6.875 18.75 6.875" stroke="#A7A7A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27.5 11.25C27.5 6.4125 23.5875 2.5 18.75 2.5" stroke="#A7A7A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
      <div className="w-[60px] h-[60px] bg-[#EFF3FA] rounded-lg flex items-center justify-center">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.25 25.625H8.75C5 25.625 2.5 23.75 2.5 19.375V10.625C2.5 6.25 5 4.375 8.75 4.375H21.25C25 4.375 27.5 6.25 27.5 10.625V19.375C27.5 23.75 25 25.625 21.25 25.625Z" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.25 11.25L17.3375 14.375C16.05 15.4 13.9375 15.4 12.65 14.375L8.75 11.25" stroke="#A7A7A7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>
    </div>

    <button
      onClick={() => setViewTeacher(null)}
      className="mt-6 px-4 py-2 bg-[#152259] text-white rounded-md hover:bg-[#152259]/80"
    >
      Back to List
    </button>
  </div>

  <div className="w-[40%]">
    <h3 className="text-lg font-bold">About</h3>
    <p className="text-[#A7A7A7] leading-[21px] mb-4 text-[16px]">
      {viewTeacher.about}
    </p>
    <ul className="grid grid-cols-2 gap-4">
      <li>
        <div className="flex flex-col">
          <strong>Subject</strong>
          <p className="text-[#A7A7A7] leading-[21px] mb-4 text-[16px]">
            {viewTeacher.subject}
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-col">
          <strong>Class</strong>
          <p className="text-[#A7A7A7] leading-[21px] mb-4 text-[16px]">
            {viewTeacher.className}
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-col">
          <strong>Age</strong>
          <p className="text-[#A7A7A7] leading-[21px] mb-4 text-[16px]">
            {viewTeacher.age}
          </p>
        </div>
      </li>
      <li>
        <div className="flex flex-col">
          <strong>Gender</strong>
          <p className="text-[#A7A7A7] leading-[21px] mb-4 text-[16px]">
            {viewTeacher.gender}
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

      ) : (
        <div className="w-full overflow-hidden">
          <div className="text-[#424242] py-3 px-4 font-bold text-[12px] leading-[15px]">
            <div className="grid grid-cols-6 gap-4 font-semibold text-[12px]">
              <div>Name</div>
              <div>Subject</div>
              <div>Class</div>
              <div>Email</div>
              <div>Gender</div>
              <div>Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className={`py-3 px-4 grid grid-cols-6 gap-4 text-[12px] items-center transition ${
                  index % 2 === 1 ? "bg-[#EFF3FA]" : ""
                }`}
              >
                <div className="text-[#4F4F4F] font-medium">
                  {teacher.fullName}
                </div>
                <div className="text-[#4F4F4F]">{teacher.subject}</div>
                <div className="text-[#4F4F4F]">{teacher.className}</div>
                <div className="text-[#4F4F4F] truncate">{teacher.email}</div>
                <div className="text-[#4F4F4F]">{teacher.gender}</div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleView(teacher)}
                    className="text-green-600 hover:text-green-800 hover:underline"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleEdit(teacher)}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(teacher)}
                    className="text-red-600 hover:text-red-800 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {modalOpen && (
        <Modal openModal={modalOpen} setOpenModal={setModalOpen} width="900px" height="80vh">
        <div className="h-full overflow-y-auto">
          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-2 gap-8 text-[14px] text-[#8A8A8A] items-start"
          >
            <h2 className="col-span-2 text-lg font-bold mb-6 text-center text-black">
              {currentTeacher ? "Edit Teacher" : "Add Teacher"}
            </h2>
      
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                defaultValue={currentTeacher?.fullName || ""}
                className="border border-gray-300 rounded-lg w-full p-3 mb-4"
                required
              />
            </div>
      
            <div>
              <label className="block mb-2 font-medium">Class</label>
              <input
                type="text"
                name="className"
                placeholder="Class"
                defaultValue={currentTeacher?.className || ""}
                className="border border-gray-300 rounded-lg w-full p-3 mb-4"
              />
            </div>
      
            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                defaultValue={currentTeacher?.email || ""}
                className="border border-gray-300 rounded-lg w-full p-3 mb-4"
                required
              />
            </div>
      
            <div>
              <label className="block mb-2 font-medium">Gender</label>
              <select
                name="gender"
                defaultValue={currentTeacher?.gender || ""}
                className="border border-gray-300 rounded-lg w-full p-3 mb-4"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
      
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                defaultValue={currentTeacher?.subject || ""}
                className="border border-gray-300 rounded-lg w-full p-3 mb-4"
              />
            </div>
      
            <div>
              <label className="block mb-2 font-medium">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Age"
                defaultValue={currentTeacher?.age || ""}
                className="border border-gray-300 rounded-lg w-full p-3 mb-4"
              />
            </div>
      
            <div className="col-span-2 flex gap-8 items-start">
              <div className="flex-1">
                <label className="block font-medium mb-2">About</label>
                <textarea
                  name="about"
                  placeholder="About"
                  defaultValue={currentTeacher?.about || ""}
                  className="border border-gray-300 rounded-lg w-full p-3 h-40 mb-4"
                />
              </div>
      
              <div className="flex-1">
                <label className="block mb-2 font-[500]">Import Img</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="border border-gray-300 rounded-lg w-full p-3 mb-4"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 w-40 h-40 rounded-full object-cover mx-auto"
                  />
                )}
              </div>
            </div>
      
            <div className="col-span-2 flex justify-center mt-4">
              <Button
                text={currentTeacher ? "Save Changes" : "Add Teacher"}
                type="submit"
                extraClass="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              />
            </div>
          </form>
        </div>
      </Modal>
      
      )}

      {deleteModalOpen && (
        <Modal openModal={deleteModalOpen} setOpenModal={setDeleteModalOpen} height="200px">
          <div className="text-center pt-10">
            <p className="text-gray-600 mb-4">
              Do you want to delete{" "}
              <strong>{teacherToDelete?.fullName}</strong>?
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                text="Yes"
                extraClass="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={confirmDelete}
              />
              <Button
                text="Cancel"
                extraClass="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                onClick={() => setDeleteModalOpen(false)}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Teachers;
