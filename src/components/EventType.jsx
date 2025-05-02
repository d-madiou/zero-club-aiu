"use client"

import { useState } from "react"

function EventType() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", name: "View all" },
    { id: "business", name: "Business" },
    { id: "tech", name: "Tech & Innovation" },
    { id: "education", name: "Education & Personal Growth" },
    { id: "creativity", name: "Creativity" },
  ]

  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit",
      category: "Tech",
      date: { day: "09", weekday: "Fri", month: "Feb", year: "2024" },
      description: "Join us in London for a day of groundbreaking talks and networking opportunities.",
      categoryColor: "bg-[#4AAEA3] text-white",
    },
    {
      id: 2,
      title: "Creative Minds Festival",
      category: "Creativity",
      date: { day: "10", weekday: "Sat", month: "Feb", year: "2024" },
      description: "A celebration of art, music, and design. Meet talented creators, join workshops, and get inspired!",
      categoryColor: "bg-[#4AAEA3] text-white",
    },
    {
      id: 3,
      title: "Wellness & Balance Expo",
      category: "Business",
      date: { day: "11", weekday: "Sun", month: "Feb", year: "2024" },
      description: "Discover the latest in health, fitness, and mental well-being at this transformative event.",
      categoryColor: "bg-[#4AAEA3] text-white",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      
      <div className="flex flex-nowrap gap-4 mb-8 overflow-x-auto scrolblbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`px-4 py-2 rounded whitespace-nowrap ${
            activeFilter === filter.id
              ? "bg-[#46A4A3] text-black"
              : "bg-white text-gray-800 hover:bg-gray-100"
          }`}
          onClick={() => setActiveFilter(filter.id)}
          type="button"
        >
          {filter.name}
        </button>
      ))}
    </div>

      
      <div className="space-y-8">
        {events.map((event) => (
          <div key={event.id} className="border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center md:flex-row gap-6">
              
              <div className="border-1 border-black rounded-[4px] p-4 text-center w-32 h-32 flex flex-col justify-center">
                <div className="text-[16px] font-medium">{event.date.weekday}</div>
                <div className="text-[32px] font-bold">{event.date.day}</div>
                <div className="text-[16px]">
                  {event.date.month} {event.date.year}
                </div>
              </div>

             
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-[24px] font-bold">{event.title}</h3>
                      <span className={`px-3 py-1 text-sm ${event.categoryColor}`}>{event.category}</span>
                    </div>
                    <p className="text-black text-[16px]">{event.description}</p>
                  </div>

                  <button className="bg-[#E4A251] hover:bg-[#e09c3a] text-black font-medium px-6 py-3 rounded whitespace-nowrap">
                    Reserve Your Seat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventType
