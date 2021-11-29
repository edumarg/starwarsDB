import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import { MovieContextProvider } from "./context/movieContext";
import { LoadingContextProvider } from "./context/loadingContext";
import Footer from "./components/footer";
import Header from "./components/header";

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
      <LoadingContextProvider>
        <MovieContextProvider>
          <div className="App">
            <div className="container-fluid" style={{ height: "100%" }}>
              <div className="row">
                <Header />
              </div>
              <div className="row" style={{ height: "calc(100% - 95px)" }}>
                <SideBar />
                <Content />
              </div>
              <div className="row">
                <Footer className="my-footer" />
              </div>
            </div>
          </div>
        </MovieContextProvider>
      </LoadingContextProvider>
    </React.Fragment>
  );
}

export default App;
