import React, { useState } from 'react';

export default function Home() {
  console.log("Hello, World!")
  const [isOpen, toggleSideBar] = React.useState(false);
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-white px-8 py-4 z-30 border-r overflow-auto lg:translate-x-0 transform ${isOpen ? "translate-x-0 ease-out transition-medium" : "-translate-x-full ease-in transition-medium"}`}>
        <div className="flex justify-between items-center">
          <img src='/images/robot.svg' alt='' className="w-9 h-9" />
          <button className="text-gray-700 lg:hidden"
            onClick={() => toggleSideBar(false)}>
            <svg className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Scrumboard
         </h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Backlog</span>
              <span className="text-xs font-semibold text-gray-700">20</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2 bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg">
              <span className="text-sm font-medium text-white " >
                Active Sprit
              </span>
              <span className="text-xs font-semibold text-white">2</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Reports</span>
              <span className="text-xs font-semibold text-gray-700">12</span>
            </a>
          </div>
          <h3 className="mt-8 text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Tags
         </h3>
          <div className="mt-2 -mx-3">
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Bug</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2 ">
              <span className="text-sm font-medium text-gray-700 " >
                New Feature
              </span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Marketing</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Design</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Research</span>
            </a>
            <a href="#" className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-gray-700">Overdue</span>
            </a>
          </div>

        </nav>
      </div>

      <div className="flex flex-col flex-1 min-w-0 ">
        <div className="flex-shrink-0">
          <header className="flex flex-col border-b px-6 border-gray-200">
            <div className=" flex justify-between items-center py-3">
              <div className="min-w-0 flex-shrink-1 flex items-center py-3">
                {/* Hamburger Menu */}
                <button className="text-gray-600 lg:hidden"
                  onClick={() => toggleSideBar(true)}>
                  <svg className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                {/* Search Bar */}
                <div className="ml-4 lg:ml-0 relative w-64">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input placeholder="Search" className="block w-full text-sm border border-gray-400 rounded-md py-2 pl-10 pr-4 placeholder-gray-400" />
                </div>
              </div>


              {/* Icons */}
              <div className="ml-4 flex items-center">
                <button className="flex-shrink-0 text-gray-500 w-6 h-6">
                  <svg className=""
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button className="flex-shrink-0 ml-4 mr-2">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src='https://images.unsplash.com/photo-1603759039427-8f6d7525330d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                    alt='man-1' />
                </button>
              </div>
            </div>
            {/* Header Bottom */}
            <div className="flex items-center justify-between">
              <div className="sm:flex sm:items-center">
                <h2 className="text-lg font-medium text-gray-900"> Assigness</h2>
                <div className="flex items-center sm:ml-6 sm:mt-0 mt-1">
                  <span className="border-2 border-white rounded-full">
                    <img className="w-6 h-6 rounded-full object-cover"
                      src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                      alt='avatar' />
                  </span>
                  <span className="border-2 border-white rounded-full -ml-2.5">
                    <img className="w-6 h-6 rounded-full object-cover"
                      src='https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                      alt='avatar' />
                  </span>
                  <span className="border-2 border-white rounded-full -ml-2.5">
                    <img className="w-6 h-6 rounded-full object-cover"
                      src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                      alt='avatar' />
                  </span>
                  <span className="border-2 border-white rounded-full -ml-2.5">
                    <img className="w-6 h-6 rounded-full object-cover"
                      src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                      alt='avatar' />
                  </span>
                </div>
              </div>
              {/* Buttons */}
              <div className="ml-8 flex items-center sm:mb-2">
                <button className="pl-2 pr-4 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:bg-gray-800">
                  Complete Sprint
              </button>
                <button className="ml-5 pl-2 pr-4 py-2 rounded-md flex items-center text-sm font-medium text-white bg-gradient-to-r from-purple-700 to-blue-500 hover:from-purple-600 to-blue-400">
                  <svg className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>New Item</span>
                </button>
              </div>
            </div>
          </header>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 flex-1 overflow-auto">
          <main className="p-3 h-full inline-flex space-x-2 overflow-hidden">
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Todo
              </h3>
              <div className="flex-1 min-h-0">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-red-200 rounded">
                            <span className="text-sm font-medium text-red-500 leading-tight">
                              Bug
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* In Progress */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-3 pb-1 ext-md font-medium text-gray-700 leading-tight font-mono">
                In Progress
              </h3>
              <div className="flex-1 min-h-0 overflow-y-auto ">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-pink-200 rounded">
                            <span className="text-sm font-medium text-pink-500 leading-tight">
                              RESEARCH
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-green-200 rounded">
                            <span className="text-sm font-medium text-green-500 leading-tight">
                              New Feature
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Testing */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Testing
              </h3>
              <div className="flex-1 min-h-0">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Done */}
            <div className="flex flex-col w-80 bg-transparent rounded-md">
              <h3 className="px-3 pt-3 pb-1 text-md font-medium text-gray-700 leading-tight font-mono">
                Done
              </h3>
              <div className="flex-1 min-h-0">
                <ul className="pt-1 pb-3 px-3">
                  <li className="mt-1">
                    <a href="#" className="block p-5 rounded-md bg-white shadow">
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="px-3 py-1 bg-blue-200 rounded">
                            <span className="text-sm font-medium text-blue-500 leading-tight">
                              DESIGN
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <svg className="w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="ml-2"> 2 </span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-800">
                            Product illustration to symbolize bringing people together
                          </p>
                        </div>
                        <div className="flex items-center mt-3">
                          <span className="border-2 border-white rounded-full">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&&q=80'
                              alt='avatar' />
                          </span>
                          <span className="border-2 border-white rounded-full -ml-2.5">
                            <img className="w-6 h-6 rounded-full object-cover"
                              src='https://images.unsplash.com/photo-1614274300320-f8d5002cf6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=144&q=80'
                              alt='avatar' />
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
