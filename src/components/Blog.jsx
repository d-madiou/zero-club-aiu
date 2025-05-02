import blogImage1 from "../assets/images/blog1.png"
import blogImage2 from "../assets/images/blog2.png"
import blogImage3 from "../assets/images/blog3.png"

function Blog() {
    const blogPosts = [
      {
        id: 1,
        title: "From Passion to Success: Inspiring Participant Journeys",
        category: "Business",
        readTime: "5 min read",
        image: blogImage1,
        description: "Discover how our participants turned their ideas into reality through innovation and perseverance",
        categoryColor: "bg-[#4AAEA3] text-white",
      },
      {
        id: 2,
        title: "How Our Community is Making an Impact",
        category: "Community",
        readTime: "5 min read",
        image: blogImage2,
        description: "Meet the change makers in our community and learn how they're making a real impact",
        categoryColor: "bg-[#4AAEA3] text-white",
      },
      {
        id: 3,
        title: "Exciting Industry Updates & Upcoming Events",
        category: "News",
        readTime: "5 min read",
        image: blogImage3,
        description: "Stay up to date with major industry shifts, upcoming events, and key announcements",
        categoryColor: "bg-[#4AAEA3] text-white",
      },
    ]
  
    return (
      <div className="container mx-auto px-4 py-10 max-w-7xl rounded-lg mt-8">
        <div className="text-center mb-8">
          <p className="text-sm font-medium mb-4">Blog</p>
          <h2 className="text-3xl font-bold mb-4">Latest Insights & Inspiring Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover industry trends, success stories, and expert insights to stay ahead in your field.
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="border-1 border-gray-800 rounded-[18px] overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-[416px] h-[300px] object-cover" />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  <span className={`px-3 py-1 text-xs ${post.categoryColor}`}>{post.category}</span>
                  <span className="text-xs text-black font-medium">{post.readTime}</span>
                </div>
  
                <h3 className="text-[24px] font-bold mb-2">{post.title}</h3>
                <p className="text-black text-sm mb-6">{post.description}</p>
  
                <a href="#" className="text-[16px] flex items-center text-black hover:text-[#4AAEA3]">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-center">
          <button className="bg-[#4AAEA3] hover:bg-[#3d9a91] text-white font-medium px-6 py-2 rounded transition-all">
            See All Updates
          </button>
        </div>
      </div>
    )
  }
  
  export default Blog
  