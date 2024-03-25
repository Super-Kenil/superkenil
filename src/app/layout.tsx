import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

const calculateExperince = () => {
  const startDate = new Date('Septermber 10, 2022')
  const currentDate = new Date()
  const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + currentDate.getMonth() - startDate.getMonth()
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const yearsString = (years > 1) ? 'years' : 'year'
  const monthsString = (months > 1) ? 'months' : 'month'
  return `${years} ${yearsString} and ${months} ${monthsString}`
}

const getTechStack = () => {
  const techStack = ['NextJs', 'ReactJs', 'Typescript', 'NodeJs', 'React Native']
  return (techStack.map((tech, idx) => ((techStack.length - 3) < idx) ? techStack.length - 1 === idx ? tech : tech + ' and ' : tech + ', ')).join('')
}

const description = `Fast-paced, creative web developer with ${calculateExperince()} of experience and extensive knowledge of ${getTechStack()}.`

export const metadata: Metadata = {
  title: 'Super Kenil',
  description: description,
  authors: {
    name: 'Super Kenil',
    url: 'superkenil.com',
  },
  keywords: ['Kenil', 'Sudani', 'Super', 'React', 'Nextjs', 'Developer', 'Web Developer', 'MERN', 'Full Stack Developer'],
  openGraph: {
    type: 'profile',
    description: description,
    countryName: 'India',
    emails: 'kenilsudani.blog@gmail.com',
    title: 'Super Kenil | Full Stack Developer',
    siteName: "Super Kenil's Portfolio",
    images: 'https://avatars.githubusercontent.com/u/91980339'
  },
  twitter: {
    site: 'https://twitter.com/natkhat_kenil',
    title: 'Kenil Sudani',
    images: 'https://twitter.com/natkhat_kenil/photo',
  }
}

export default function RootLayout ({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
