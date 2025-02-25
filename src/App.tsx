import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import UomPage from "./pages/UomPage";
import SupplierPage from "./pages/SuppplierPage";
import EmployeePage from "./pages/EmployeePage";
import TransactionPage from "./pages/TransactionPage";
import TransactionDetailPage from "./pages/TransactionDetailPage";
import PriceListPage from "./pages/PriceListPage";
import SupplierDetailPage from "./pages/SupplierDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" index element={<DashboardPage />} />
          <Route path="products" index element={<ProductsPage />} />
          <Route path="uoms" index element={<UomPage />} />
          <Route path="suppliers" index element={<SupplierPage />} />
          <Route path="suppliers/:id" element={<SupplierDetailPage />} />
          <Route path="employees" index element={<EmployeePage />} />
          <Route path="transactions" index element={<TransactionPage />} />
          <Route path="transaction/:id" element={<TransactionDetailPage />} />
          <Route path="pricelists" index element={<PriceListPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
