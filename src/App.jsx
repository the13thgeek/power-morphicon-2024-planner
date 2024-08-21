import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import pmcLogo from './assets/Power_Morphicon_logo.png';
import Panels from './components/Panels';
import PhotoOps from './components/PhotoOps';
import Footer from './components/Footer';
import "./App.scss";

const App = () => {  

  return (
    <div className="content-body">
      <header className="content-box">
        <img className="logo-pmc" src={pmcLogo} alt="Power Morphicon" />
      </header>
      <div className="content-box info">
        <h1>Power Morphicon 2024 Planner</h1>
        <p>The panel and photo-op schedules for this year's PMC are out! Use the text box below to search for a panel and any matching events will show up in the table below.</p>
        <p className="disclaimer"><b>Disclaimer:</b> The data displayed on this page is sourced directly from <a href="//officialpowermorphicon.com" target="_blank">Power Morphicon</a>. We do not verify the accuracy of the information provided by PMC. Therefore, we are not responsible for any errors, inaccuracies, or discrepancies in the data. The information is provided "as is," and we recommend verifying details directly with PMC for the most accurate and up-to-date information.</p>
        <p className="powered">Powered by: @the13thgeek [ <a href="//twitter.com/the13thgeek" target="_blank">Twitter</a> ] [ <a href="//twitch.tv/the13thgeek" target="_blank">Twitch</a> ] [ <a href="//instagram.com/the13thgeek" target="_blank">Instagram</a> ]</p>
      </div>
      <Tabs className='tab-content' selectedTabClassName="active">
        <TabList className='tab-list'>
          <Tab>Panels</Tab>
          <Tab>Photo Ops</Tab>
        </TabList>
        <TabPanel className="tab-content">
          <Panels />
        </TabPanel>
        <TabPanel className="tab-content">
          <PhotoOps />
        </TabPanel>
      </Tabs>
      
      <Footer />
    </div>
  );
};

export default App;
