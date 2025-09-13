import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import {
  Users,
  Stethoscope,
  Calendar,
  FileText,
  Heart,
  Shield,
} from "lucide-react";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <Header />

      <main className="mx-auto  px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mt-[10vh] mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("welcome")}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive healthcare services for migrant workers in Kerala.
            Access medical records, book appointments, and manage your health
            digitally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/worker/login"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>{t("workerLogin")}</span>
            </Link>
            <Link
              to="/doctor/login"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-dark transition-colors flex items-center justify-center space-x-2"
            >
              <Stethoscope className="w-5 h-5" />
              <span>{t("doctorLogin")}</span>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("healthRecords")}</h3>
            <p className="text-gray-600">
              Store and access your complete medical history, prescriptions, and
              health data securely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {t("bookAppointment")}
            </h3>
            <p className="text-gray-600">
              Schedule appointments with doctors at various hospitals across
              Kerala easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t("testReports")}</h3>
            <p className="text-gray-600">
              Upload, store, and share your test reports and medical documents
              digitally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p className="text-gray-600">
              Login securely using your Aadhar number or ABHA ID with complete
              data protection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Multi-language Support
            </h3>
            <p className="text-gray-600">
              Access the platform in English, Hindi, and Malayalam for better
              understanding.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Doctor Portal</h3>
            <p className="text-gray-600">
              Healthcare providers can manage patient appointments and access
              medical records.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of migrant workers who trust our platform for their
            healthcare needs.
          </p>
          <Link
            to="/worker/signup"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors inline-flex items-center space-x-2"
          >
            <span>{t("signup")}</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
