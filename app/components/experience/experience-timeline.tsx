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
              "Expanded the company's grant information ingestion pipeline to include more data sources",
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
              "Migrated company's CI/CD pipeline from Jenkins to Github Actions with ”living documentation” auto-deployed to Github Pages",
              "Enacted an alternative CRUD interface for a command-line tool used by multiple teams",
              "Supported the release process by running automated tests on mobile and web platforms followed by signing off with manual testers",
              "Integrated a Java to Typescript React app plugin to display a custom Android SDUI layout inspector",
              "Evaluated multiple blockers preventing Espresso from returning accurate data within a Jenkins CI/CD pipeline",
              "Ensured new steps to track analytics and outages impacting media playback"
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
              "Curriculum of Study in Web Development (Ruby on Rails and Javascript)",
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
            title='Quality Assurance Engineer'
            location='San Francisco, CA'
            company='Volley Inc'
            image={volleyLogo}
            highlights={[
              "Analyzed data collected through AWS Lambda, Amplitude, and Amazon Cloudwatch logs for consistencies between bugs",
              "Refined an Airtable database containing thousands of songs by removing duplicates and updating incorrect metadata",
              "Enforced a high standard of quality by catching over a dozen code-breaking bugs during product testing"
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
              "Developed two cross - platform augmented reality apps using Unity and Vuforia in partnership with the US Air Force",
              "Constructed 3D models of heavy equipment and animated them in Blender for visual tutorials of repair and maintenance",
              "Collaborated with a team to attend conferences, deliver demos, and provide updates to the NSF",
              "Maintained the company's SQL databases for their iOS and Android apps, containing daily activity for over 90 companies",
              "Designed and implemented scannable barcodes through augmented reality for use with mobile apps for ease of use",
              "Resolved user requests for new features in the company's online OSHA training programs",
              "Completed major updates to the HTML and CSS content of all company websites",
              "Cataloged company websites based on domain name, hosting services, and content management system",
              "Documented all company OSHA training videos with url, host platform, and duration in extensive Excel spreadsheets"
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
              "Published and presented findings of MRC bezier curve fitting using seven different algorithms of weighting inner - protein angles",
              "Leveraged Python scripts in UCSF Chimera to demonstrate lateral and longitudinal discrepancies from protein analysis",
              "Extended the Common Bioinformatics Library repository for PDB and MRC manipulation in C++"
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