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

import tlLogo from '@public/images/experience/Instrumentl-Logo.png'
import pandoraLogo from '@public/images/experience/Pandora-Logo.png'
import volleyLogo from '@public/images/experience/Volley-Logo.png'
import mymicLogo from '@public/images/experience/MYMIC-Logo.png'
import oduLogo from '@public/images/experience/ODU-Logo.png'
import appAcademyLogo from '@public/images/experience/AppAcademy-Logo.png'

export function useSectionInView() {
  const { ref, inView } = useInView({
    threshold: 0.5,
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
    <VerticalTimeline className='flex flex-col gap-y-4' lineColor='lightgray'>
      <div ref={instrumentlInView.ref} >
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "black", border: "2px solid lightgray", boxShadow: "none" }}
          contentArrowStyle={{ borderRight: "7px solid lightgray" }}
          date="April 2024 - Present"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<CgWebsite />}
          visible={instrumentlInView.inView}
        >
          <TimelineElementComponent
            title='Software Engineer'
            location='San Francisco, CA'
            company='Instrumentl'
            image={tlLogo}
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
            title='Student'
            location='San Francisco, CA'
            company='App Academy'
            image={appAcademyLogo}
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
          />
        </VerticalTimelineElement>
      </div>
    </VerticalTimeline>
  )
}