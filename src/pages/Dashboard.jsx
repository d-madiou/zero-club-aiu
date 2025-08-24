import React, { useState } from 'react'
import { Search, Key, Lock, Users, Home, Bell, Paperclip } from "lucide-react"
import TeamsAndStudents from "../components/TeamsAndStudents"
import AllClubs from "../components/AllClubs"
import Members from '../components/Members'
import logo3zero from "../assets/images/logo3zero.png"
import image3 from "../assets/images/image2.png"
import ClubDetails from '../components/ClubDetails'
import NotificationModal from '../components/Notifications'

// Members Component

<Members />
// Dashboard Overview Component
function DashboardOverview() {
  const statsData = [
    {
      title: "Occupied Rooms",
      value: "20",
      subtitle: "rooms are occupied",
      icon: <Key className="w-6 h-6 border border-[#4AAEA3] p-1 rounded-md" />,
      bgColor: "bg-white",
      textColor: "text-[#4AAEA3]",
    },
    {
      title: "Available Rooms",
      value: "8",
      subtitle: "rooms are available",
      icon: <Lock className="w-6 h-6 border border-[#4AAEA3] p-1 rounded-md" />,
      bgColor: "bg-white",
      textColor: "text-[#4AAEA3]",
    },
    {
      title: "Registered Teams",
      value: "15",
      subtitle: "teams",
      icon: <Users className="w-6 h-6 border border-[#4AAEA3] p-1 rounded-md" />,
      bgColor: "bg-white",
      textColor: "text-[#4AAEA3]",
    },
  ]

  const keyPersons = [
    {
      studentId: "20231234",
      program: "Computer Science",
      name: "Ahmad Al-Faraj",
      nationality: "Omani",
      yearOfGraduation: "2026 - 2 - 18",
      status: "Key Holder",
      statusColor: "bg-[#4AAEA3] text-white",
    },
    {
      studentId: "20231234",
      program: "Computer Science",
      name: "Ahmad Al-Faraj",
      nationality: "Omani",
      yearOfGraduation: "2026 - 2 - 18",
      status: "Key Requested",
      statusColor: "bg-[#F0AD4E] text-white",
    },
    {
      studentId: "20231234",
      program: "Computer Science",
      name: "Ahmad Al-Faraj",
      nationality: "Omani",
      yearOfGraduation: "2026 - 2 - 18",
      status: "Key Holder",
      statusColor: "bg-[#4AAEA3] text-white",
    },
    {
      studentId: "20231234",
      program: "Computer Science",
      name: "Ahmad Al-Faraj",
      nationality: "Omani",
      yearOfGraduation: "2026 - 2 - 18",
      status: "Key Requested",
      statusColor: "bg-[#F0AD4E] text-white",
    },
    {
      studentId: "20231234",
      program: "Computer Science",
      name: "Ahmad Al-Faraj",
      nationality: "Omani",
      yearOfGraduation: "2026 - 2 - 18",
      status: "Key Holder",
      statusColor: "bg-[#4AAEA3] text-white",
    },
  ]

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-6">
        Overview
        <span className="block w-16 h-1 bg-[#F0AD4E] mt-1"></span>
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border-1 border-[#4AAEA3] p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">{stat.title}</span>
              <div className="text-gray-400">{stat.icon}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`text-2xl font-bold ${stat.textColor} mb-1`}>{stat.value}</div>
              <div className="text-2xl text-[#4AAEA3] font-bold">{stat.subtitle}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Keys Persons Table */}
      <div className="bg-white rounded-2xl border-1 border-[#4AAEA3]">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold flex items-center">
            <Key className="w-5 h-5 mr-2" />
            Keys Persons
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Program
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nationality
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year of Graduation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {keyPersons.map((person, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.studentId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.program}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.nationality}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{person.yearOfGraduation}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${person.statusColor}`}
                    >
                      {person.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <TeamsAndStudents />
      <AllClubs/>
    </div>
  )
}

// Main Dashboard Component
function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardOverview />
      case 'clubs':
        return <AllClubs />
      case 'members':
        return <Members />
      case 'club details':
        return <ClubDetails />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-white font-[roboto]">
      {/* Sidebar */}
      <div className="w-64 bg-[#4AAEA3] flex flex-col">
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-center">
          <img
            src={image3 || "/placeholder.svg"}
            alt="AIU LOGO"
            className="h-16 w-auto"
            style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(1000%) hue-rotate(0deg) brightness(3)' }}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-white bg-opacity-20 text-[#46A4A3]' 
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-[#46A4A3]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Home className="w-4 h-4" />
                </div>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('clubs')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  activeTab === 'clubs' 
                    ? 'bg-white bg-opacity-20 text-[#46A4A3]' 
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-[#46A4A3]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span>Clubs</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('members')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  activeTab === 'members' 
                    ? 'bg-white bg-opacity-20 text-[#46A4A3]' 
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-[#46A4A3]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span>Members</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('club details')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                  activeTab === 'club details' 
                    ? 'bg-white bg-opacity-20 text-[#46A4A3]' 
                    : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-[#46A4A3]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Paperclip className="w-4 h-4" />
                </div>
                <span>Club details</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search a name, nationality, student, or etc."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4AAEA3] focus:border-transparent"
                />
              </div>
            </div>
            <button 
              onClick={() => setIsNotificationOpen(true)}
              className="relative hover:bg-gray-100 p-2 rounded-lg transition-colors"
            >
              <Bell className="w-6 h-6 text-gray-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="ml-6">
              <div className="ml-6">
              <img src={logo3zero || "/placeholder.svg"} alt="3ZERO CLUB" className="h-12 w-auto" />
            </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>

        <NotificationModal 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
      </div>
    </div>
  )
}

export default Dashboard