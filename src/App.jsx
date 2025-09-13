import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { UserProvider } from "./contexts/UserContext";
import HomePage from "./pages/HomePage";
import WorkerLogin from "./pages/WorkerLogin";
import WorkerSignup from "./pages/WorkerSignup";
import WorkerDashboard from "./pages/WorkerDashboard";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorDashboard from "./pages/DoctorDashboard";
import BookAppointment from "./pages/BookAppointment";
import HealthRecords from "./pages/HealthRecords";
import TestReports from "./pages/TestReports";

function App() {
  return (
    <LanguageProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/worker/login" element={<WorkerLogin />} />
              <Route path="/worker/signup" element={<WorkerSignup />} />
              <Route path="/worker/dashboard" element={<WorkerDashboard />} />
              <Route
                path="/worker/health-records"
                element={<HealthRecords />}
              />
              <Route path="/worker/test-reports" element={<TestReports />} />
              <Route
                path="/worker/book-appointment"
                element={<BookAppointment />}
              />
              <Route path="/doctor/login" element={<DoctorLogin />} />
              <Route path="/doctor/signup" element={<DoctorLogin />} />
              <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;
