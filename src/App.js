import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Product from "./component/Product";
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dynamic from "./component/Dynamic";
import DynamicTable from "./component/DynamicTable";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/add" element={<Product />} />
            <Route path="/dynamicForm" element={<Dynamic />} />
            <Route path="/dynamicTable" element={<DynamicTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
