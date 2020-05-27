import React from 'react'
import Link from 'gatsby-link'
import snowflake-bentley from "../images/snowflake-bentley-75.jpg"

const SnowflakeBentley = () => (
  <div>

    <h1>Snowflake Bentley</h1>

    <img src={snowflake-bentley} alt="Snowflake Bentley" />

    <Link to="/">Home</Link>
  </div>
)

export default SnowflakeBentley
