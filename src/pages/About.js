import { WhatILove } from '../components/About/WhatILove'
import { AboutMe } from './../components/About/AboutMe'
import React from 'react'
import { Box, useColorModeValue, Container, Image } from '@chakra-ui/react'
import { ReachOut } from '../components/About/SocialMedia'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      overflow="hidden"
      overflowY="scroll"
    >
      <Container
        w="100%"
        h="47%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
          whileHover={{ scale: 1.2, rotate: 0 }}
          whileTap={{
            scale: 0.8,
            rotate: -360,
            borderRadius: '100%'
          }}
        >
          <Image
            borderColor="whiteAlpha.600"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile-pic.jpeg"
            alt="Yassine Tadlaoui Picture"
          />
        </motion.div>
      </Container>
      <AboutMe />
      <WhatILove />
      <ReachOut />
    </Box>
  )
}

export default AboutPage
