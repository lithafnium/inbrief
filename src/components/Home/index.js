import React from 'react';
import { MediumContainer, Card, Button, Details, Header1, HeaderImage, AboutDescription, MetaContainer } from './styles'
import img from '../../notes.svg'
import { FaProjectDiagram, FaReadme, FaChartPie, FaChalkboardTeacher } from 'react-icons/fa'
import { IconContext } from "react-icons";


function Home() {

  return (
    <MetaContainer>
      <div style={{ width: '100%', minHeight: '75vh', maxWidth: '1024px' }}>
        <AboutDescription>
          <div>
            <Header1>create dynamic summaries like never before.</Header1>
            <Details>Generate rich summaries from news articles, research papers, lecture videos, and other mediums through our
            AI-driven platform.
                  </Details>
            <Button>Learn More</Button>
          </div>
          <HeaderImage src={img} />

        </AboutDescription>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%',
          padding: '60px 0px', 
          backgroundColor: '#f7fafc'
        }}
      >
        <MediumContainer>
          <Card>
            <IconContext.Provider value={{ color: "#ef8354", size: '4em', style: { verticalAlign: 'middle'}}}>
              <div>
                <FaChalkboardTeacher />
              </div>
            </IconContext.Provider>
            <Details>
              Increase productiivty by reducing read times and learn only what's necessary in your papers.
            </Details>
          </Card>
          <Card>
          <IconContext.Provider value={{ color: "#ef8354", size: '4em', style: { verticalAlign: 'middle'}}}>
              <div>
                <FaProjectDiagram />
              </div>
            </IconContext.Provider>
            <Details>
              Power your research through our platform. 
            </Details>
            </Card>
            
        </MediumContainer>
        <MediumContainer>
          <Card>
            <IconContext.Provider value={{ color: "#ef8354", size: '4em', style: { verticalAlign: 'middle'}}}>
              <div>
                <FaReadme />
              </div>
            </IconContext.Provider>
            <Details>
              Scrape anything ranging from seminars, Wikipedia articles, Medium blogs, or news announcements using our in-house text-summarization framework.
            </Details>
          </Card>
          <Card>
          <IconContext.Provider value={{ color: "#ef8354", size: '4em', style: { verticalAlign: 'middle'}}}>
              <div>
                <FaChartPie />
              </div>
            </IconContext.Provider>
            <Details>
              Learn insights about your documents, including interactive and dynamic summarizations and infographics outlining your input. 
            </Details>
            </Card>
            
        </MediumContainer>
      </div>
    </MetaContainer>
  );
}

export default Home
