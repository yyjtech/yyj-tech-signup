import React from "react"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import ChannelStewardCard from "@/components/ChannelStewardCard"
import useContent from "@/hooks/useContent"

const ChannelStewards = ({ data }) => {
  const content = useContent()
  const stewards = content.homepage.channelStewards


  return (
    <Layout>
      <Header />
      <main className="container mb-10 channel-stewards">
        <h1 className="text-action ">Channel Stewards</h1>
        <p className="mt-8">Channel Stewards started in 2023 as a result of the feedback from the community as part of the <a href="/evolution">Evolution of YYJ Tech</a>. It is a volunteer role, tapping into individuals who are interested in helping improve the YYJ Tech community.</p>
        <p>Channel stewards see ourselves as the "community for supporting the community", not top-down leadership. We opted for the title of "Channel Steward" and not "moderator" because the role encompasses both the moderation of content, and the orchestration of processes and practices to improve the Slack group and the wider YYJ Tech community.</p>
        <h2 className="mt-12">Channel Stewardship Responsibilities</h2>
        <p>Channel Stewards are responsible both for stewarding their channels, and supporting the Steward community to grow and mature. We strive for their role to look like this:</p>
        <ul>
          <li>Leverage the <a href="https://www.tidalequality.com/equity-sequence">Equity Sequence</a> to support equitable decision making .</li>
          <li>Monitor their channel(s) and the stewardship forum for potential issues regularly.</li>
          <li>Support others to work through active issues collectively as they arise.</li>
          <li>Help cover for others if they have to step away for some reason.</li>
          <li>Retro/check in once a month (or other timeframe we agree to) - ideally synchronously.</li>
          <li>Identify a “next step” that you will work to implement to help make your channel(s) or the community better, and bring updates on where it’s at monthly.  We will aim to make these tiny #agile.</li>
          <li>Never feel guilty for not “doing enough”. The community will take all the energy you are willing give - as in, we are both grateful for whatever you want to give, and also it will eat up ALL of your energy if you let it.</li>
        </ul>

        
        <h2 className="mt-12">Current Stewards</h2>

        <div className="card-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stewards.map((steward, idx) => <ChannelStewardCard steward={stewards[idx]} key={idx}/>)}
          
        </div>
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfWJE2PAN8_20YN0xd3kymzBuRsmkWLjwLlnoVasud1-olyUw/viewform?usp=sf_link"
            className="text-center rounded-xl py-4 bg-secondary px-5 font-heading text-white font-semibold uppercase tracking-widest transition-colors duration-200 no-underline"
          >
            Become a Channel Steward
          </a>
      </main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Channel Stewardship" />


export default ChannelStewards
