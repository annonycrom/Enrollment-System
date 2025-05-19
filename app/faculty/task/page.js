"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Section() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // Start with no tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    status: "Pending",
    subject: "",
    task: "",
    dueDate: "",
  });
  const router = useRouter();

  const handleSignOut = () => {
    setShowMenu(false);
    router.push("/");
  };

  const handleSubmit = (subject, task) => {
    // Add your submission logic here
  };

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { ...newTask }
    ]);
    setShowModal(false);
    setNewTask({ status: "Pending", subject: "", task: "", dueDate: "" });
  };

  // Sort tasks by due date (earliest first)
  const sortedTasks = [...tasks].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  // Add this function inside your Section component
  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white m-0 min-h-screen">
      <div className="flex flex-row items-start">
        <div className="flex flex-col items-center bg-blue-600 p-5 shadow-md w-80 h-70">
          <Image
            src="/sample.jpg"
            alt="Logo"
            width={100}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h5 className="text-xl font-bold text-black mt-2 m-0">Jhon Doe</h5>
        </div>
        <header className="flex-1 flex items-center justify-center relative">
          <h1 className="bg-yellow-500 w-5/5 text-center text-4xl font-bold text-black p-10.5 py-20">
            TASKS
          </h1>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black focus:outline-none cursor-pointer"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li>
                    <a
                      href="/faculty/profile"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faculty/settings"
                      className="block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowMenu(false)}
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
      </div>
      <main className="content flex flex-row">
        <nav className="flex flex-col gap-11 bg-yellow-600 shadow-md max-w-max text-center">
          <a
            href="/faculty/dashboard"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Dashboard
          </a>
          <a
            href="/faculty/section"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Section
          </a>
          <a
            href="/faculty/task"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white bg-yellow-400"
            target="_self"
          >
            Task
          </a>
          <a
            href="/faculty/schedule"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Schedule
          </a>
          <a
            href="/faculty/grades"
            className="text-lg px-29 py-10 hover:bg-yellow-500 hover:text-white"
            target="_self"
          >
            Grades
          </a>
        </nav>
        <div className="flex flex-col flex-1 gap-6 p-2">
          <section className="p-1 max-w-screen bg-grey shadow border-dotted border-2 border-yellow-400 rounded-lg overflow-scroll overflow-x-auto">
            <div className="flex items-center mb-2 justify-between">
              <span className="font-extrabold text-lg text-black">
                Task List
              </span>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={() => setShowModal(true)}
              >
                + Add Task
              </button>
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-black">Status</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Subject</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Task</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Due Date</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Submit</th>
                  <th className="border border-gray-300 px-4 py-2 text-black">Remove</th>
                </tr>
              </thead>
              <tbody>
                {sortedTasks.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-gray-500 py-4">No tasks yet.</td>
                  </tr>
                ) : (
                  sortedTasks.map((t, idx) => (
                    <tr key={idx}>
                      <td className="border border-gray-300 px-4 py-2 text-black">{t.status}</td>
                      <td className="border border-gray-300 px-4 py-2 text-black">{t.subject}</td>
                      <td className="border border-gray-300 px-4 py-2 text-black">{t.task}</td>
                      <td className="border border-gray-300 px-4 py-2 text-black">{t.dueDate}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input type="file" className="mb-2 text-black" />
                        <button
                          onClick={() => handleSubmit(t.subject, t.task)}
                          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                        >
                          Submit
                        </button>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={() => handleRemoveTask(tasks.indexOf(t))}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            {/* Modal for adding a new task */}
            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h2 className="text-xl font-bold mb-4">Add New Task</h2>
                  <div className="mb-2">
                    <label className="block text-black mb-1">Subject Name</label>
                    <input
                      type="text"
                      className="w-full border px-2 py-1 rounded text-black"
                      value={newTask.subject}
                      onChange={(e) => setNewTask({ ...newTask, subject: e.target.value })}
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-black mb-1">Task Type</label>
                    <input
                      type="text"
                      className="w-full border px-2 py-1 rounded text-black"
                      value={newTask.task}
                      onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black mb-1">Due Date</label>
                    <input
                      type="date"
                      className="w-full border px-2 py-1 rounded text-black"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={handleAddTask}
                      disabled={!newTask.subject || !newTask.task || !newTask.dueDate}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}