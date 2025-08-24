import React from 'react';
import { LayoutGrid, User, Users, Briefcase } from 'lucide-react';
import TechNexus from '../assets/images/nexus.png'
import teamWork from '../assets/images/startup.png'
import pexels from '../assets/images/pixels.png'
import Member3 from '../assets/images/Fauziah.png'
import Member1 from '../assets/images/Mustapha.png'
import Member2 from '../assets/images/Ossama.png'
import Member5 from '../assets/images/Thierno.png'
import Member4 from '../assets/images/Zakia.png'

const teamsData = [
  {
    logo: TechNexus,
    name: "TechNexus",
    category: "Tech",
    members: "5/5 Members",
    bgColor: "bg-[#46A4A3]",
  },
  {
    logo: teamWork,
    name: "TechNexus",
    category: "Tech",
    members: "5/5 Members",
    bgColor: "bg-[#E4A251]",
  },
  {
    logo: pexels,
    name: "TechNexus",
    category: "Tech",
    members: "5/5 Members",
    bgColor: "bg-[#E4A251]",
  },
  {
    logo: teamWork,
    name: "TechNexus",
    category: "Tech",
    members: "5/5 Members",
    bgColor: "bg-[#46A4A3]",
  },
];

const studentsData = [
  {
    avatar: Member1,
    name: "Mustafa Yahya",
    team: "TechNexus",
  },
  {
    avatar: Member2,
    name: "Mohamed Oussama Chakeur",
    team: "TechNexus",
  },
  {
    avatar: Member3,
    name: "Fauziyya Abdullahi Ahmed",
    team: "TechNexus",
  },
    {
    avatar: Member4,
    name: "Kyi Nuu Phyu Sin",
    team: "TechNexus",
  },
  {
    avatar: Member5,
    name: "Thierno Madiou Diallo",
    team: "TechNexus",
  },
];


// --- Sub-components for better structure ---

const TeamCard = ({ team }) => (
  <div className={`${team.bgColor} rounded-xl p-4 flex items-center space-x-4`}>
    <div className={'rounded-lg p-2'}>
        <img src={team.logo} alt={`${team.name} Logo`} className="w-18 h-18 rounded-md object-cover" />
    </div>
    <div className="text-white">
      <h3 className="font-bold text-lg">{team.name}</h3>
      <div className="flex items-center space-x-2 opacity-80 mt-1">
        <Briefcase className="w-4 h-4"/>
        <span>{team.category}</span>
      </div>
      <div className="flex items-center space-x-2 opacity-80 mt-1">
        <Users className="w-4 h-4" />
        <span>{team.members}</span>
      </div>
    </div>
  </div>
);

const StudentListItem = ({ student }) => (
  <div className="flex items-center space-x-4">
    <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-md object-cover" />
    <div>
      <h4 className="font-semibold text-gray-800">{student.name}</h4>
      <p className="text-sm text-gray-500">{student.team}</p>
    </div>
  </div>
);


// --- Main Component ---

function TeamsAndStudents() {
  return (
    <div className="bg-white p-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Top Performing Teams Section */}
        <div className="lg:col-span-2 border border-[#59A9A9] rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <LayoutGrid className="w-7 h-7 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-800">Top Performing Teams</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamsData.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        </div>

        {/* Top Student Section */}
        <div className="lg:col-span-1 rounded-lg border-1 border-[#4AAEA3] p-2">
             <div className="flex items-center space-x-3 mb-6">
                <User className="w-7 h-7 text-gray-700" />
                <h2 className="text-2xl font-bold text-gray-800">Top Student</h2>
            </div>
            <div className="space-y-6">
                 {studentsData.map((student, index) => (
                    <StudentListItem key={index} student={student} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsAndStudents;
