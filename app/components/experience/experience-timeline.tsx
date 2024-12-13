"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useInView } from "react-intersection-observer"
import 'react-vertical-timeline-component/style.min.css'
import TimelineElementComponent from './timeline-element'

import { CgWebsite } from 'react-icons/cg'
import { SiPandora } from 'react-icons/si'
import { FaTerminal } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { GiParrotHead } from 'react-icons/gi'
import { FaGraduationCap } from 'react-icons/fa'
import { FaDna } from 'react-icons/fa'

import tlLogo from '@images/experience/Instrumentl-Logo.png'
import pandoraLogo from '@images/experience/Pandora-Logo.png'
import volleyLogo from '@images/experience/Volley-Logo.png'
import mymicLogo from '@images/experience/MYMIC-Logo.png'
import oduLogo from '@images/experience/ODU-Logo.png'
import appAcademyLogo from '@images/experience/AppAcademy-Logo.png'

export function useSectionInView() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  })

  return {
    ref,
    inView,
  }
}

export default function ExperienceTimeline() {
  const instrumentlInView = useSectionInView()
  const pandoraInView = useSectionInView()
  const appAcademyEduInView = useSectionInView()
  const volleyInView = useSectionInView()
  const mymicInView = useSectionInView()
  const oduInView = useSectionInView()
  const oduEduInView = useSectionInView()

  const WORK_COLOR = "dodgerblue"
  const EDUCATION_COLOR = "darkorange"

  return (
    <VerticalTimeline className='flex flex-col gap-y-4' lineColor={'' /* Actually set inside globals.scss, but this empty string is necessary to prevent errors */}>
      <div ref={instrumentlInView.ref} >
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="April 2023 - August 2024"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<CgWebsite />}
          visible={instrumentlInView.inView}
        >
          <TimelineElementComponent
            title='Software Engineer'
            location='San Francisco, CA'
            company='Instrumentl'
            image={tlLogo}
            highlights={[
              "Revamped outdated website pages to improve user experience and increase conversion rates",
              "Conducted A/B tests to determine the most effective user interface for new and existing features",
              "Expanded the company's data ingestion pipeline by scraping websites with Nokogiri",
            ]}
          />
        </VerticalTimelineElement>
      </div>
      <div ref={pandoraInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="November 2021 - March 2023"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<SiPandora />}
          visible={pandoraInView.inView}
        >
          <TimelineElementComponent
            title='Software Engineer'
            location='Oakland, CA'
            company='Pandora / SiriusXM'
            image={pandoraLogo}
            highlights={[
              "Streamlined CI/CD by migrating from Jenkins to GitHub Actions with automatic documentation",
              "Integrated a Java to Typescript React app plugin to display a custom Android SDUI layout inspector",
              "Enacted a new React UI for a data heavy internal tool, with a focus on charting existing data"
            ]}
          />
        </VerticalTimelineElement>
      </div>
      <div ref={appAcademyEduInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="November 2021 - March 2023"
          iconStyle={{ background: `${EDUCATION_COLOR}`, color: '#fff' }}
          icon={<FaTerminal />}
          position='right'
          visible={appAcademyEduInView.inView}
        >
          <TimelineElementComponent
            title='Software Engineering Graduate'
            location='San Francisco, CA'
            company='App Academy'
            image={appAcademyLogo}
            highlights={[
              "Curriculum of Study in Web Development",
              "Rigorous 1000+ hour software development course with a <3% acceptance rate which encompasses full-stack development: Ruby On Rails, SQL, Javascript, React, TDD, algorithms, design patterns, and programming best practices."
            ]}
          />
        </VerticalTimelineElement>
      </div>
      <div ref={volleyInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="October 2019 - December 2019"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<FaMagnifyingGlass />}
          visible={volleyInView.inView}
        >
          <TimelineElementComponent
            title='Contract Quality Assurance Engineer'
            location='San Francisco, CA'
            company='Volley Inc'
            image={volleyLogo}
            highlights={[
              "Analyzed data from AWS Lambda, Amplitude, and Cloudwatch logs for consistencies between bugs",
              "Refined Airtable databases by removing duplicates and updating incorrect metadata",
              "Enforced a high standard of quality by catching over a dozen code-breaking bugs"
            ]}
          />
        </VerticalTimelineElement>
      </div>
      <div ref={mymicInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="June 2018 - September 2019"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<GiParrotHead />}
          visible={mymicInView.inView}
        >
          <TimelineElementComponent
            title='Software Engineer'
            location='Portsmouth, VA'
            company='MYMIC LLC'
            image={mymicLogo}
            highlights={[
              "Developed two cross-platform augmented reality apps using Unity and Vuforia in partnership with the US Air Force and the National Science Foundation",
              "Constructed and animated 3D models in Blender for use in the company's training simulations",
              "Queried and analyzed data from the company's SQL databases to identify trends and improve user experience",
            ]}
          />
        </VerticalTimelineElement>
      </div>
      <div ref={oduInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="June 2017 - July 2018"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<FaDna />}
          visible={oduInView.inView}
        >
          <TimelineElementComponent
            title='Undergraduate Bioinformatics Student Researcher'
            location='Norfolk, VA'
            company='Old Dominion University Department of Computer Science'
            image={oduLogo}
            highlights={[
              "Extended the Common Bioinformatics Library repository for PDB and MRC manipulation in C++",
              "Leveraged Python scripts in UCSF Chimera to demonstrate lateral and longitudinal discrepancies from protein analysis",
              "Published and presented findings of MRC bezier curve fitting using different algorithms of weighting inner-protein angles",
            ]}
          />
        </VerticalTimelineElement>
      </div>
      <div ref={oduEduInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: `2px solid lightgray`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="August 2015 - May 2019"
          iconStyle={{ background: `${EDUCATION_COLOR}`, color: '#fff' }}
          icon={<FaGraduationCap />}
          position='right'
          visible={oduEduInView.inView}
        >
          <TimelineElementComponent
            title='Undergraduate Computer Engineering Student'
            location='Norfolk, VA'
            company='Old Dominion University'
            image={oduLogo}
            highlights={[
              "93 Credit Hours in Computer Engineering / Modeling and Simulation Engineering",
              "Included courses: CS250 (Problem Solving and Programming), CS252 (Intro to Unix), CS361 (Advanced Data Structures and Algorithms), CS330 (Object Oriented Programming and Design), CS495 (Machine Learning for Pattern Recognition within Molecular Imaging), MSIM205 (Discrete Event Simulation), and MSIM320 (Continuous Simulation)."
            ]}
          />
        </VerticalTimelineElement>
      </div>
    </VerticalTimeline>
  )
}