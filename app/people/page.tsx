import { Box, Card, Flex, Grid, Container, Avatar } from '@radix-ui/themes';

import React from 'react'
import { ThemeProvider } from 'next-themes';

const PeoplePage = () => {
  return (
    <ThemeProvider attribute='class'>

      <div className="p-5 text-xl font-bold">
        People Page
        <Grid display="grid" className="text-lg font-normal">
          <Container width="auto" size="4" className='m-9 p-2'>
            <Flex>
              <Card style={{ maxWidth: 480 }}>
                <Flex gap="3" align="center" className='m-2 drop-shadow-2xl border-solid border-2 border-indigo-200'>
                  <Avatar
                    size="9"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T" />
                  <Box className='bg-slate-300 p-5 m-5 rounded-md shadow-lg'>
                    <h1>This is a Box 1 that contains a bunch of content that cannot be spaced any less than the amount of text displayed. There is a possibility that it will wrap around to the second line if it gets close to the next Box. And it does.</h1>
                  </Box>
                </Flex>
              </Card>
              <Card style={{ maxWidth: 480 }}>
                <Box className='bg-red-300 p-3 m-3 rounded-md'>
                  <h1>This is a Box 2 that contains a bunch of content that cannot be spaced any less than the amount of text displayed. There is a possibility that it will wrap around to the second line if it gets close to the next Box.</h1>
                </Box>
              </Card>
            </Flex>
          </Container>
        </Grid>
      </div>
    </ThemeProvider>
)}

export default PeoplePage