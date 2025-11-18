import React from 'react'
import Card from '../components/Card'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$120/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$80/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "Cloud Support Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$55/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$130/hour",
    location: "Los Angeles, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$95/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Automation Engineer",
    tag1: "Full-time",
    tag2: "Junior level",
    pay: "$70/hour",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Research Intern",
    tag1: "Part-time",
    tag2: "Junior level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "9 weeks ago",
    post: "Database Administrator",
    tag1: "Full-time",
    tag2: "Senior level",
    pay: "$110/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "7 days ago",
    post: "Cybersecurity Analyst",
    tag1: "Full-time",
    tag2: "Mid level",
    pay: "$85/hour",
    location: "Mumbai, India"
  }
];
  console.log(jobOpenings);
  return (
    <div className='parent'>
    {jobOpenings.map(function(elem){
      return <Card company={elem.celeompanyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo}/>
    })}
    </div>
  )
}

export default App
