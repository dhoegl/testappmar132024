import React from 'react'
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

const HomePage = () => {
  return (
    <ThemeProvider attribute='class'>
      <div className="p-5 text-xl font-bold">
        Home Page
      </div>
    </ThemeProvider>
  )
}

export default HomePage
