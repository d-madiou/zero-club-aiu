# ZERO-CLUB

A modern React-based club management system built with Vite, React Router, and Tailwind CSS.
To connect this frontend with the Django backend please follow the steps below:
Anything you don't understand please feel free to work with me or reach out to me

## 🚀 Features

- **Club Management**: Create and manage club profiles with detailed information
- **User Authentication**: Secure login and registration system
- **Event Management**: Create, view, and manage club events
- **Member Dashboard**: Personalized dashboard for club members
- **File Upload**: Upload and manage club-related files
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Team Profiles**: View team member information and roles

## 📁 Project Structure

```
zero-club/
├── src/
│   ├── assets/         
│   ├── components/      
│   │   ├── members/     
│   │   ├── ClubDetails.jsx
│   │   └── Profile.jsx
│   └── pages/           
│       ├── Home.jsx
│       ├── Team.jsx
│       ├── Events.jsx
│       ├── Register.jsx
│       ├── Login.jsx
│       ├── CreateClub.jsx
│       ├── UploadFile.jsx
│       └── Dashboard.jsx
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.0.0
- **Routing**: React Router DOM 7.5.2
- **Styling**: Tailwind CSS 4.1.4
- **Build Tool**: Vite 6.3.1
- **Icons**: Lucide React & React Icons
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zero-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page |
| `/team` | Team | Team member profiles |
| `/register` | Register | User registration |
| `/login` | Login | User authentication |
| `/club-details/:id` | ClubDetails | Individual club information |
| `/events` | Events | Event listings and management |
| `/dashboard` | Dashboard | User dashboard |
| `/createclub` | CreateClub | Club creation form |
| `/profile` | Profile | User profile management |
| `/upload/:action` | FileUploader | File upload functionality |

## 🎨 Styling

This project uses Tailwind CSS for styling with the following setup:
- Tailwind CSS 4.1.4 with Vite integration
- Custom CSS in `App.css`
- Responsive design patterns
- Modern UI components with Lucide React icons

## 🔒 Authentication

The application includes user authentication with:
- User registration (`/register`)
- User login (`/login`) 
- Protected routes and user profiles
- Session management

## 📱 Key Features

### Club Management
- Create new clubs with detailed information
- View club details with dynamic routing
- Manage club members and roles

### Event System
- Create and manage events
- Event listings and details
- Event registration capabilities

### File Management
- Upload files with parameterized actions
- File organization and management
- Support for various file types

### User Dashboard
- Personalized user experience
- Quick access to user's clubs and events
- Profile management

## 🚀 Deployment

To deploy this application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service (Vercel, Netlify, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and not licensed for public use.

## 🐛 Issues

If you encounter any issues or have suggestions, please create an issue in the repository.

---

Built with ❤️ using React and modern web technologies.