"use client"

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { AiFillFire } from 'react-icons/ai'
import { useInView } from "react-intersection-observer"
import 'react-vertical-timeline-component/style.min.css'

export function useSectionInView() {
  const { ref, inView } = useInView({
    threshold: 1,
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

  return (
    <VerticalTimeline>
      <div ref={instrumentlInView.ref} >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="April 2024 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AiFillFire />}
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
          className="vertical-timeline-element--work"
          date="November 2021 - March 2023"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AiFillFire />}
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
          className="vertical-timeline-element--work"
          date="November 2021 - March 2023"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<AiFillFire />}
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
          className="vertical-timeline-element--work"
          date="October 2019 - December 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AiFillFire />}
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
          className="vertical-timeline-element--work"
          date="June 2018 - September 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AiFillFire />}
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
          className="vertical-timeline-element--work"
          date="June 2017 - July 2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<AiFillFire />}
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
          className="vertical-timeline-element--education"
          date="August 2015 - May 2019"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<AiFillFire />}
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