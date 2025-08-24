
import React, { useState } from 'react'
import { Key, X } from "lucide-react"

function NotificationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "New Key request",
      subtitle: "Room 101",
      time: "2 min ago",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      title: "New Key request",
      subtitle: "Room 102",
      time: "5 min ago",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      title: "New Key request",
      subtitle: "Room 103",
      time: "10 min ago",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      title: "New Key request",
      subtitle: "Room 104",
      time: "15 min ago",
      avatar: "/api/placeholder/40/40"
    }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-16 z-50 scroll-auto">
      <div className="bg-white rounded-lg shadow-lg w-80 max-h-96 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Notification</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Notifications List */}
        <div className="max-h-80 overflow-y-auto">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
              <div className="w-10 h-10 bg-[#4AAEA3] rounded-full flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-white" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.subtitle}</p>
              </div>
              <div className="text-xs text-gray-400">
                {notification.time}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full text-center text-sm text-[#4AAEA3] hover:text-[#3a8a87] font-medium">
            See all notifications
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotificationModal
