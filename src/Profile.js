import React, {Component} from 'react'
import {Avatar, Section, Heading, Card, CardImage, Text} from 'rebass'

class Profile extends Component {
  render () {
    return (
      <Section>

      <Avatar circle
        size={300}
        src="http://www.fillmurray.com/300/300"/>
      <Heading big level={1} size={1}>
        Brett Macy
      </Heading>

      </Section>

    )
  }
}

export default Profile;
