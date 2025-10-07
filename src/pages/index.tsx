import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Layout pageTitle="Home Page">
      <p>
        Alex Zheng is a member of the Houston Association of REALTORS®, the Texas Association of REALTORS®, and the National Association of REALTORS®. He is currently a real estate agent with <a href="https://alexzheng.levitaterealestate.com" target="_blank">Levitate Real Estate</a>.
      </p>
      <p>
        Based in northwest Houston, just north of the Energy Corridor, by Jersey Village and Cypress, Alex has been a Texan homeowner since 2014, and has intimate knowledge of The Lakes on Eldridge North gained through his time both living within the neighborhood and acting as a property manager.
      </p>
      <p>
        Alex was born in Tulsa, Oklahoma, but he came to Texas as soon as he could 🤠 Ask him where he's from, and he'll tell you Houston for short, but he grew up all over. He spent some time growing up in Sugar Land, as well as the Dallas-Fort Worth area.
      </p>
      <p>
        After graduating from the International School of Kuala Lumpur, Alex turned down an offer from the University of Texas at Austin's Electrical Engineering program, and chose instead to follow in his father's footsteps. He sought to join the oil and gas industry, and graduated with a Bachelor of Science in Petroleum Engineering from the University of Tulsa. He went on to pursue a Master in Business Administration from the University of Missouri with concentrations in Finance and Marketing Analytics.
      </p>
      <p>
        If you choose to work with Alex, you'll be working with an agent who is dead serious when it comes to business and the commitments he makes. He maintains high standards and is meticulous. Alex goes beyond merely pushing paper and opening doors: he has leveled concrete, installed wood flooring, sweated pipe, evacuated and recharged refrigerant gas systems, replaced start-run capacitors, worked with structured wiring, and added breakers to electrical panels.
      </p>
      <p>
        When Alex is not working on behalf of his clients he can be found doting on his furkid, Paul the Yorkie; taking care of his property; or banging away on the piano.
      </p>
      <p>
        Ready to experience what a great agent can do for you? <a href="contact">Contact Alex</a> today!
      </p>
    </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Alex Zheng, REALTOR®</title>