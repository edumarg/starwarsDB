import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import { MovieContextProvider } from "./context/movieContext";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MovieContextProvider>
        <div className="App">
          <div class="container-fluid">
            <div class="row">
              <SideBar />
              <Content />
            </div>
          </div>
        </div>
      </MovieContextProvider>
    </React.Fragment>
  );
}

export default App;
