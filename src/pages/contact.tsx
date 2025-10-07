import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <Layout pageTitle="Contact">
      <p>
        Alex is ready and excited to help you with all your real estate needs!
      </p>
      <p>
        Call, text, or email to get started!
      </p>
      <address>
        <p>
          <strong>Phone:</strong> <a href="tel:+12818868168">(281) 886-8168</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:contact+alexzhengrealtor@alexzhengrealtor.com">contact@alexzhengrealtor.com</a>
        </p>
      </address>
    </Layout>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Contact Alex Zheng, REALTOR®</title>