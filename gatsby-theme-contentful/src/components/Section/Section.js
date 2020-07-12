import React from 'react';
import { HeroSection } from './HeroSection';
import { CallToAction } from './CallToAction';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSection() {
    switch (this.props.section.__typename) {
      case 'ContentfulSection':
        return <HeroSection section={this.props.section} />;
      case 'ContentfulCallToAction':
        return <CallToAction section={this.props.section} />;
      default:
        return <div>You have no content coming in!</div>;
    }
  }

  render() {
    return <div className="">{this.renderSection()}</div>;
  }
}
