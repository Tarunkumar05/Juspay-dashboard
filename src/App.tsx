import type React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import OrderList from "./pages/OrderList/OrderList";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<OrderList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

// import { Button } from "antd";

// function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Juspay UI Assignment</h1>
//       <Button type="primary">Primary Button</Button>
//       <Button>Default Button</Button>
//     </div>
//   );
// }

// export default App;
