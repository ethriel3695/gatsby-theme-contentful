import React from 'react';
import { SectionLayout } from './SectionLayout';
import { HeroSection } from './HeroSection';
import { GallerySection } from './GallerySection';
import { ProductSection } from './ProductSection';
import { MultipleCTASection } from './MultipleCTASection';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSection() {
    const section = this.props.section;
    switch (this.props.section.internal.type) {
      case 'ContentfulHero':
        return <HeroSection section={section} />;
      case 'ContentfulCallToAction':
        return null;
      case 'ContentfulGallery':
        return (
          <SectionLayout section={section} isContainer={true}>
            <GallerySection section={section} />
          </SectionLayout>
        );
      case 'ContentfulProducts':
        return (
          <SectionLayout section={section} isContainer={true}>
            <ProductSection section={section} />
          </SectionLayout>
        );
      case 'ContentfulMultipleCallToAction':
        return (
          <SectionLayout section={section} isContainer={true}>
            <MultipleCTASection section={section} />
          </SectionLayout>
        );
      case 'ContentfulSection':
        return <SectionLayout section={section} isContainer={true} />;
      default:
        return <div>You have no content coming in!</div>;
    }
  }

  render() {
    return <>{this.renderSection()}</>;
  }
}
