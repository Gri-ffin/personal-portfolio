import React from 'react'
import { Container, Heading } from '@chakra-ui/react'
import { Section } from '../Section'
import { Paragraph } from '../Paragraph'

export function AboutMe() {
  return (
    <Container display="flex" justifyContent="left" alignItems="center">
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          18 years old, I&apos;m currently second year college student studying
          computer science, very passionate about coding in general, I find the
          idea of turning lines of code into very beautiful things very
          charming, and currently trying to start my professional career as a
          software developer.
        </Paragraph>
      </Section>
    </Container>
  )
}