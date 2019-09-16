import React from "react";

import KeynoteSpeakerOptions from "./key-speaker-components/key-speech-options";
import Testimonial from "./key-speaker-components/testimonials";

const KeynoteSpeaker = () => {
  return (
    <div className="keynote-speaker-container">
      <div className="keynote-speaker-title">Keynote Speaker</div>
      <div className="keynote-subtitle">
        - Below is a list of talks that Eric provides on the topic of Keynote
        Speaking -
      </div>
      <KeynoteSpeakerOptions />
      <div className="divider">
        <div className="line" />
      </div>
      <div className="testimonials-container">
        <div className="key-section-title">Keynote Testimonials</div>
        <Testimonial
          who="- Kimberly Brenneman, Utah Business Licensing Association"
          content="''Our members were inspired and engaged throughout the entire keynote. Mr. Aroca’s message provided practical advice and important life lessons that attendees could apply immediately to their lives. It is very apparent that Mr. Aroca cares genuinely, as he stayed after to shake hands, autograph books, and connect with every member that wanted to speak to him.''"
        />
        <Testimonial
          who="- Tina Smith, COO, Utah Association of Public Charter Schools"
          content="''Through his entertaining style and humor he shared four key concepts: Dream More, Learn More, Do More and Become More, motivating our audience to see what was possible in their professional development. Our audience also found tools and inspiration to guide their students through a similar process to reach the life they imagined both inside and outside the classroom.''"
        />
        <Testimonial
          who="- Carl Boyington, Exec Director, UASSP"
          content="''He is a very high-energy interactive presenter. He connects with the audience and keeps them engaged.''"
        />
        <Testimonial
          who="- Megan Bronson, CPA Event Chair, Squire & Company, PC"
          content="''Eric was an excellent addition to our program and captivated the audience with his inspiring message, “Live the Life You have Always Imagined.” The many business owners, bookkeepers and accounting personnel who attended the conference were motivated by his stories and insights. His interaction with he audience kept them engaged and helped them apply his message to their lives.''"
        />
        <Testimonial
          who="- Kathleen M. Lund, CCP, President, ICBA"
          content="''Your presentation was inspiring, funny and brilliant! I appreciated the time you invested understanding our organization and the challenges our members face, before designing your presentation for us. I’m certain you have heard this before, but you are a dynamic presenter who has a unique ability to engage, motivate, and teach influential communication skills in a friendly and conversational manner.''"
        />
      </div>
    </div>
  );
};

export default KeynoteSpeaker;
