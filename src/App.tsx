import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/landing-layout";
import LandingPage from "./components/landing-page";
import UploadDocuments from "./components/upload-documents";
import CustomersTable from "./components/customers-table";

function App() {
  return (
    <Router>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/upload-documents/:uid" element={<UploadDocuments />} />
          <Route path="/admin" element={<CustomersTable />} />
        </Routes>
      </LandingLayout>
    </Router>
  );
}

export default App;
