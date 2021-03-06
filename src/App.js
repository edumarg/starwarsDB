import "./App.css";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import { MovieContextProvider } from "./context/movieContext";
import { MoviesContextProvider } from "./context/moviesContext";
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
          <MoviesContextProvider>
            <div className="App">
              <div className="container-fluid my-container">
                <div className="row">
                  <Header />
                </div>
                <div className="row" style={{ height: "100%" }}>
                  <SideBar />
                  <Content />
                </div>
                <div className="row">
                  <Footer className="my-footer" />
                </div>
              </div>
            </div>
          </MoviesContextProvider>
        </MovieContextProvider>
      </LoadingContextProvider>
    </React.Fragment>
  );
}

export default App;
