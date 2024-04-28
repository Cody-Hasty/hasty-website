"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { CgWebsite } from 'react-icons/cg'
import { SiPandora } from 'react-icons/si'
import { FaTerminal } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { GiParrotHead } from 'react-icons/gi'
import { FaGraduationCap } from 'react-icons/fa'
import { FaDna } from 'react-icons/fa'
import { useInView } from "react-intersection-observer"
import 'react-vertical-timeline-component/style.min.css'

export function useSectionInView() {
  const { ref, inView } = useInView({
    threshold: 0.75,
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
  const EDUCATION_COLOR = "orange"

  return (
    <VerticalTimeline className='flex flex-col gap-y-4' lineColor='lightgray'>
      <div ref={instrumentlInView.ref} >
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${WORK_COLOR}`, border: `2px solid ${WORK_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${WORK_COLOR}` }}
          date="April 2024 - present"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<CgWebsite />}
          visible={instrumentlInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Instrumentl
          </p>
        </VerticalTimelineElement>
      </div>
      <div ref={pandoraInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${WORK_COLOR}`, border: `2px solid ${WORK_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${WORK_COLOR}` }}
          date="November 2021 - March 2023"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<SiPandora />}
          visible={pandoraInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Oakland, CA</h4>
          <p>
            Pandora / SiriusXM
          </p>
        </VerticalTimelineElement>
      </div>
      <div ref={appAcademyEduInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${EDUCATION_COLOR}`, border: `2px solid ${EDUCATION_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${EDUCATION_COLOR}` }}
          date="November 2021 - March 2023"
          iconStyle={{ background: `${EDUCATION_COLOR}`, color: '#fff' }}
          icon={<FaTerminal />}
          position='right'
          visible={appAcademyEduInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            App Academy
          </p>
        </VerticalTimelineElement>
      </div>
      <div ref={volleyInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${WORK_COLOR}`, border: `2px solid ${WORK_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${WORK_COLOR}` }}
          date="October 2019 - December 2019"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<FaMagnifyingGlass />}
          visible={volleyInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Quality Assurance Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Volley Inc
          </p>
        </VerticalTimelineElement>
      </div>
      <div ref={mymicInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${WORK_COLOR}`, border: `2px solid ${WORK_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${WORK_COLOR}` }}
          date="June 2018 - September 2019"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<GiParrotHead />}
          visible={mymicInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Portsmouth, VA</h4>
          <p>
            MYMIC LLC
          </p>
        </VerticalTimelineElement>
      </div>
      <div ref={oduInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${WORK_COLOR}`, border: `2px solid ${WORK_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${WORK_COLOR}` }}
          date="June 2017 - July 2018"
          iconStyle={{ background: `${WORK_COLOR}`, color: '#fff' }}
          icon={<FaDna />}
          visible={oduInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Undergraduate Bioinformatics Student Researcher</h3>
          <h4 className="vertical-timeline-element-subtitle">Norfolk, VA</h4>
          <p>
            Old Dominion University Department of Computer Science
          </p>
        </VerticalTimelineElement>
      </div>
      <div ref={oduEduInView.ref}>
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: `${EDUCATION_COLOR}`, border: `2px solid ${EDUCATION_COLOR}`, boxShadow: "none" }}
          contentArrowStyle={{ borderRight: `7px solid ${EDUCATION_COLOR}` }}
          date="August 2015 - May 2019"
          iconStyle={{ background: `${EDUCATION_COLOR}`, color: '#fff' }}
          icon={<FaGraduationCap />}
          position='right'
          visible={oduEduInView.inView}
        >
          <h3 className="vertical-timeline-element-title">Undergraduate Computer Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Norfolk, VA</h4>
          <p>
            Old Dominion University Computer Engineering Courses
          </p>
        </VerticalTimelineElement>
      </div>
    </VerticalTimeline>
  )
}