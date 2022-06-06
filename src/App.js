import React, { useState } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [progress, setprogress] = useState(0)
  
 const  setProgress = (progress)=>{
   setprogress(progress);
  }
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          color='#f11946'
          progress={progress}
          height= {4}
          
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={ setProgress}  key="general" country="us" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News setProgress={ setProgress} key="business" country="us" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={ setProgress}
                  key="entertainment"
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={<News setProgress={ setProgress} key="general" country="us" category="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News setProgress={ setProgress} key="healt h" country="us" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News setProgress={ setProgress} key="science" country="us" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News setProgress={ setProgress} key="sports" country="us" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={ setProgress} key="technology" country="us" category="technology" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }

export default App
