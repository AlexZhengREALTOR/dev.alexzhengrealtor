import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Layout pageTitle="Contact">
      <p>
        Alex is ready and excited to help you with all your real estate needs. Call, text, or email: I look forward to hearing from you!
      </p>
      <p>
        <strong>Phone:</strong> <a href="tel:+12818868168">(281) 886-8168</a>
      </p>
      <p>
        <strong>Email:</strong> <a href="mailto:contact+alexzhengrealtor@alexzhengrealtor.com">contact@alexzhengrealtor.com</a>
      </p>
    </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>