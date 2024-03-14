import { Box, Card, Flex, Grid, Container } from '@radix-ui/themes';

import React from 'react'


const PeoplePage = () => {
  return (
    <div className="p-5 text-xl font-bold">
      People Page
      <Grid display="grid"  className="text-lg font-normal">
        <Container display="block" width="auto" size="4" className='bg-blue-400 m-9 p-2'>
          <Flex display="inline-flex" align="center" justify="center">
            <Box className='bg-slate-300 p-3 m-3 rounded-md'>
              <h1>This is a Box 1 that contains a bunch of content that cannot be spaced any less than the amount of text displayed. There is a possibility that it will wrap around to the second line if it gets close to the next Box. And it does.</h1>
            </Box>
            <Box className='bg-red-300 p-3 m-3 rounded-md'>
              <h1>This is a Box 2 that contains a bunch of content that cannot be spaced any less than the amount of text displayed. There is a possibility that it will wrap around to the second line if it gets close to the next Box.</h1>
            </Box>
          </Flex>
        </Container>
      </Grid>
    </div>
  )
}

export default PeoplePage